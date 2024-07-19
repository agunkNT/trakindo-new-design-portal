import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration, PropertyPaneDropdown } from '@microsoft/sp-property-pane';
import styles from './NewPortalWebPart.module.scss';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { SPComponentLoader } from '@microsoft/sp-loader';
import 'jquery';
import 'datatables.net';
import 'moment';
import { SPFI, spfi, SPFx as spSPFx } from "@pnp/sp";
import { AppHelper } from './AppHelper';
//page
import { Home } from './app/Home';

export interface INewPortalWebPartProps {
    App: string;
}

export default class NewPortalWebPart extends BaseClientSideWebPart<INewPortalWebPartProps> {
    public pnpjs: SPFI;
  
    protected async onInit(): Promise<void> {
        await super.onInit();
        this.pnpjs = spfi().using(spSPFx(this.context));
    }

  public render(): void {
    SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
    SPComponentLoader.loadCss("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&amp;display=fallback");
    SPComponentLoader.loadCss("https://adminlte.io/themes/v3/plugins/fontawesome-free/css/all.min.css");
    SPComponentLoader.loadCss("https://adminlte.io/themes/v3/plugins/overlayScrollbars/css/OverlayScrollbars.min.css");
    SPComponentLoader.loadCss("https://adminlte.io/themes/v3/dist/css/adminlte.min.css?v=3.2.0");
    SPComponentLoader.loadCss(`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css`);

    SPComponentLoader.loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
    SPComponentLoader.loadScript("https://adminlte.io/themes/v3/plugins/jquery/jquery.min.js");
    SPComponentLoader.loadScript("https://adminlte.io/themes/v3/plugins/bootstrap/js/bootstrap.bundle.min.js");
    SPComponentLoader.loadScript("https://adminlte.io/themes/v3/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js");
    SPComponentLoader.loadScript("https://adminlte.io/themes/v3/dist/js/adminlte.js?v=3.2.0");
    SPComponentLoader.loadScript("https://adminlte.io/themes/v3/plugins/jquery-mousewheel/jquery.mousewheel.js");
    SPComponentLoader.loadScript("https://adminlte.io/themes/v3/plugins/raphael/raphael.min.js");
    SPComponentLoader.loadScript("https://adminlte.io/themes/v3/plugins/jquery-mapael/jquery.mapael.min.js");
    SPComponentLoader.loadScript("https://adminlte.io/themes/v3/plugins/jquery-mapael/maps/usa_states.min.js");
    SPComponentLoader.loadScript("https://adminlte.io/themes/v3/plugins/chart.js/Chart.min.js");
    SPComponentLoader.loadScript("https://adminlte.io/themes/v3/dist/js/demo.js");
    SPComponentLoader.loadScript("https://adminlte.io/themes/v3/dist/js/pages/dashboard2.js");
    SPComponentLoader.loadScript(`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js`);
        
    if (this.properties.App === null || this.properties.App === '') {
        this.domElement.innerHTML = `
        <div class="${ styles['demo-content'] }">
          <div class="container">
            <div class="row">
              <div class="column">
                <p class="subTitle">App name not been configured, please contact your Administrator.</p>
              </div>
            </div>
          </div>
        </div>`;
        return;   
    }
    
    switch(this.properties.App) {
        // case "PublicationList":
        //   const publicationList = new PublicationList(this);
        //   publicationList.render();
        //   break;
        default:
          const home = new Home(this);
          home.render();
          break;
    }
    AppHelper.attachDataInterceptionOff();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
  
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupName: 'Configure App',
              groupFields: [
                PropertyPaneDropdown('App',{
                  label: 'App Name',
                  options: [
                    { key : 'Home', text: 'Home' },
                  ],
                  selectedKey: ''
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
