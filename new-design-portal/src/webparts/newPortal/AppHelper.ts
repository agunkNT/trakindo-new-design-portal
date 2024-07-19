import { SPFI } from '@pnp/sp';
import 'jquery';
import "@pnp/sp/site-groups/web";
import "@pnp/sp/security/web";
import "@pnp/sp/security/list";
import "@pnp/sp/security/item";
import { IItem } from '@pnp/sp/items';
let $: any = (window as any).$;

export class AppHelper {
    public static formatDate() {
        let d = new Date();
        let month = d.getMonth() +1;
        let day = d.getDate();
        
        // let output = d.getFullYear() + '/' +
        //     (month<10 ? '0' : '') + month + '/' +
        //     (day<10 ? '0' : '') + day;
        let output = d.getFullYear() + (month < 10 ? '0' : '') + month + (day < 10 ? '0' : '') + day;
        return output;
    }

    public static formatCurr(str) {
        return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    public static parseDate(str_date) {
        return new Date(Date.parse(str_date));
    }

    public static parseFormatStringToInt(str) {
        if (str != '') {
            return parseInt(str.replaceAll(',', ''));
        } else {
            return 0;
        }
    }

    public static updateTextView(_obj) {
        let num = this.getNumber(_obj.val());
        if (num == 0) {
          _obj.val('');
        } else {
          _obj.val(num.toLocaleString());
        }
    }
    private static getNumber(_str){
        let arr = _str.split('');
        let out = new Array();
        for (let cnt = 0; cnt < arr.length; cnt++) {
          if (isNaN(arr[cnt]) == false) {
            out.push(arr[cnt]);
          }
        }
        return Number(out.join(''));
    }

    public static async getAreas(ot, e, a, b) {
        let prid = 0;
        const prov = await fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
        let objprov = await prov.json();
        // console.log('prov=' + JSON.stringify(objprov));
        let provid = objprov.filter(x => x.name == e.toUpperCase());
        prid = provid[0].id;

        if (prid > 0) {
            let kbid = 0;
            if (e != '') {
                const kab = await fetch('https://www.emsifa.com/api-wilayah-indonesia/api/regencies/' + prid + '.json');
                let objkab = await kab.json();
                console.log('kab=' + JSON.stringify(objkab));
                let kabid = objkab.filter(x => x.name == a.toUpperCase());
                kbid = kabid[0].id;
                if (ot == 0) return objkab;
            }
    
            if (kbid > 0) {
                let kcid = 0;
                if (a != '') {
                    const kec = await fetch('https://www.emsifa.com/api-wilayah-indonesia/api/districts/' + kbid + '.json');
                    let objkec = await kec.json();
                    console.log('kec=' + JSON.stringify(objkec));
                    let kecid = objkec.filter(x => x.name == b.toUpperCase());
                    kcid = kecid[0].id;
                    if (ot == 1) return objkec;
                }
    
                if (kcid > 0) {
                    if (b != '') {
                        const kel = await fetch('https://www.emsifa.com/api-wilayah-indonesia/api/villages/' + kcid + '.json');
                        let objkel = await kel.json();
                        console.log('kel=' + JSON.stringify(objkel));
                        if (ot == 2) return objkel;
                    }
                }
            }
        }
    }

    public static numberWithCommas(e) {
        return e.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    public static disablePrintScreen() {
        const copyToClipboard = () => {
            let textToCopy = "Print screen disabled";
            navigator.clipboard.writeText(textToCopy);
        }
          
        $(document).keyup((e) => {
            if (e.keyCode == 44) {
                setTimeout(copyToClipboard, 100);
                alert('Print screen disabled!');
            }
        });
    }

    public static formatFileSize(bytes, decimalPoint = 0) {
        if(bytes == 0) return '0 Bytes';
        let k = 1000,
            dm = decimalPoint || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    public static resizeGEMSContent() {
        if(window.location.href.toLowerCase().indexOf('workbench.aspx') >= 0 || $('.demo-content').length == 0)
            return;

        $('.demo-content').width($(window).width() - $('.demo-content').offset().left - 40);
    }

    public static tableDrawCallback(api) {
        if (api.data().length <= api.page.info().length) {
            $(api.settings().tables()[0].nTableWrapper).find('.dataTables_paginate').hide();
        } else {
            $(api.settings().tables()[0].nTableWrapper).find('.dataTables_paginate').show();
        }
    }
    
    public static getMobileOS = () => {
        const ua = navigator.userAgent;
        if (/android/i.test(ua)) {
          return "Android";
        }
        else if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)){
          return "iOS";
        }
        return "Other";
    }

    public static isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    public static async allowPermissionToSite(pnpjs : SPFI, groupName : string, permissionName : string){
        let group = (await pnpjs.web.siteGroups()).filter(x=>x.Title == groupName);

        const { Id: fullRoleDefId } = await pnpjs.web.roleDefinitions.getByName(permissionName)();
        await pnpjs.web.roleAssignments.add(group[0].Id, fullRoleDefId);
    }

    public static async removePermissionFromSite(pnpjs : SPFI, groupName : string, permissionName : string){
        let group = (await pnpjs.web.siteGroups()).filter(x=>x.Title == groupName);

        const { Id: fullRoleDefId } = await pnpjs.web.roleDefinitions.getByName(permissionName)();
        await pnpjs.web.roleAssignments.remove(group[0].Id, fullRoleDefId);
    }

    public static async allowPermissionToList(pnpjs : SPFI, listName : string, groupName : string, permissionName : string, copyRoleAssignment: boolean, clearScope: boolean){
        let group = (await pnpjs.web.siteGroups()).filter(x=>x.Title == groupName);

        let list = await pnpjs.web.lists.getByTitle(listName);
        if(list != null){
            // if(!copyRoleAssignment)
            //     await list.resetRoleInheritance();

            await list.breakRoleInheritance(copyRoleAssignment, clearScope);
            const { Id: fullRoleDefId } = await pnpjs.web.roleDefinitions.getByName(permissionName)();
            await list.roleAssignments.add(group[0].Id, fullRoleDefId);
        }
    }

    public static async removePermissionFromList(pnpjs : SPFI, listName : string, groupName : string, permissionName : string){
        let group = (await pnpjs.web.siteGroups()).filter(x=>x.Title == groupName);

        let list = await pnpjs.web.lists.getByTitle(listName);
        if(list != null){
            await list.breakRoleInheritance(true, false);
            const { Id: fullRoleDefId } = await pnpjs.web.roleDefinitions.getByName(permissionName)();
            await list.roleAssignments.remove(group[0].Id, fullRoleDefId);
        }
    }

    public static async allowPermissionToItem(pnpjs : SPFI, item : IItem, groupName : string, permissionName : string, copyRoleAssignment: boolean, clearScope: boolean){
        let group = (await pnpjs.web.siteGroups()).filter(x=>x.Title == groupName);

        if(item != null){
            if(!copyRoleAssignment)
                await item.resetRoleInheritance();

            await item.breakRoleInheritance(copyRoleAssignment, clearScope);
            const { Id: fullRoleDefId } = await pnpjs.web.roleDefinitions.getByName(permissionName)();
            await item.roleAssignments.add(group[0].Id, fullRoleDefId);
        }
    }

    public static async removePermissionToItem(pnpjs : SPFI, item : IItem, groupName : string, permissionName : string){
        let group = (await pnpjs.web.siteGroups()).filter(x=>x.Title == groupName);

        if(item != null){
            await item.breakRoleInheritance(true, false);
            const { Id: fullRoleDefId } = await pnpjs.web.roleDefinitions.getByName(permissionName)();
            await item.roleAssignments.remove(group[0].Id, fullRoleDefId);
        }
    }
    
    public static async getItemPermission(pnpjs : SPFI, item: IItem){//, allowView:boolean, allowCreate:boolean, allowModify:boolean, allowDelete:boolean, allowExport:boolean, allowVersionHistory:boolean){
        //let permission = new Permission();
        let permission = {
            AllowView : false,
            AllowCreate : false,
            AllowModify : false,
            AllowDelete : false,
            AllowExport : false,
            AllowVersionHistory : false,
            AllowReport : false,
            AllowReportUnComplete : false
        };
        const listRoleAssignment = await item.roleAssignments();
        // console.log({'role assignment' : listRoleAssignment});
        for(let i=0;i<listRoleAssignment.length;i++){
            try 
            {
                await pnpjs.web.currentUser.groups.getById(listRoleAssignment[i].PrincipalId)();
                // console.log({'group':group});
                const listRoleDefinitionBinding = await item.roleAssignments.getById(listRoleAssignment[i].PrincipalId).bindings();
                // console.log({'listRoleDefinitionBinding':listRoleDefinitionBinding});

                for(let j=0;j<listRoleDefinitionBinding.length;j++){
                    const roleDefinitionBinding =  listRoleDefinitionBinding[j];
                    // console.log({'roleDefinitionBinding':roleDefinitionBinding});

                    if(roleDefinitionBinding.Name === 'View')
                        permission.AllowView = true;
                    if(roleDefinitionBinding.Name === 'Create')
                        permission.AllowCreate = true;
                    if(roleDefinitionBinding.Name === 'Export')
                        permission.AllowExport = true;
                    if(roleDefinitionBinding.Name === 'Modify')
                        permission.AllowModify = true;
                    if(roleDefinitionBinding.Name === 'Delete')
                        permission.AllowDelete = true;
                    if(roleDefinitionBinding.Name === 'Version History')
                        permission.AllowVersionHistory = true;
                    if(roleDefinitionBinding.Name === 'Report')
                        permission.AllowReport = true;
                    if(roleDefinitionBinding.Name === 'Report Uncomplete')
                        permission.AllowReportUnComplete = true;
                }
            }
            catch(ex){

            }
        } 
        return permission;
    }

    public static convertObjectToArray(obj) {
        let arr : any[] = [];
        for (let x in obj) {
            arr.push({
                'FieldName' : x,
                'FieldValue' : obj[x] == null ? null : obj[x].toString()
            });
        }
        return arr;
    }
    
    public static convertObjectToUpdateArray(obj, id) {
        let arr : any[] = [];
        for (let x in obj) {
            arr.push({
                'FieldName' : x,
                'FieldValue' : obj[x] == null ? null : obj[x].toString(),
                'ItemId' : id
            });
        }
        return arr;
    }

    public static attachDataInterceptionOff(){
        let _intervalCount = 0;
        
        let dataInterception = setInterval(setDataInterceptionOff,500);

        function setDataInterceptionOff(){
            // Add to refresh the link
            $('a').attr('data-interception','off');  
            //console.log('set a data-interception = off! ' + _intervalCount);
            
            if(_intervalCount == 10){
                clearInterval(dataInterception);
            }
            _intervalCount++;
        }
    }
}