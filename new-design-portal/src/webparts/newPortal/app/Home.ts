import NewPortalWebPart from '../NewPortalWebPart';
import * as _app from '../AppConstant';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/site-users/web";
import 'jquery';

export class Home {
   private webPart: NewPortalWebPart;

   constructor(props: NewPortalWebPart) {
      this.webPart = props;
	}

   public async render(): Promise<void>  {      
      // this.webPart.context.domElement.innerHTML = 
      //   `<div class="demo-content">
      //       <div class="wrapper">
      //          <div class="content-wrapper" style="min-height: 154.4px;margin-left: 0px !important;background-color: white !important;">
      //          <section class="content">
                  
      //          </section>
      //          </div>
      //       </div>
      //    </div>
      //    <div id="sidebar-overlay"></div>`;
      this.webPart.context.domElement.innerHTML = 
        `<div class="demo-content">
                  
            <div class="wrapper">
               <nav class="main-header navbar navbar-expand navbar-dark">
                  <ul class="navbar-nav">
                     <li class="nav-item d-none d-sm-inline-block">
                        <div class="form-inline">
                           <div class="input-group" data-widget="sidebar-search">
                              <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                              <div class="input-group-append">
                                 <button class="btn btn-sidebar"><i class="fas fa-search fa-fw"></i></button>
                              </div>
                           </div>
                           <div class="sidebar-search-results">
                              <div class="list-group">
                                 <a href="#" class="list-group-item">
                                    <div class="search-title"><strong class="text-light"></strong>N<strong class="text-light"></strong>o<strong class="text-light"></strong> <strong class="text-light"></strong>e<strong class="text-light"></strong>l<strong class="text-light"></strong>e<strong class="text-light"></strong>m<strong class="text-light"></strong>e<strong class="text-light"></strong>n<strong class="text-light"></strong>t<strong class="text-light"></strong> <strong class="text-light"></strong>f<strong class="text-light"></strong>o<strong class="text-light"></strong>u<strong class="text-light"></strong>n<strong class="text-light"></strong>d<strong class="text-light"></strong>!<strong class="text-light"></strong></div>
                                    <div class="search-path"></div>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </li>
                  </ul>
               </nav>
               <aside class="main-sidebar sidebar-dark-primary elevation-4">
                  <a href="#" class="brand-link">
                     <span class="brand-text font-weight-light">Menu Navigation</span>
                  </a>
                  <div class="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
                     <div class="os-resize-observer-host observed">
                        <div class="os-resize-observer" style="left: 0px; right: auto;"></div>
                     </div>
                     <div class="os-size-auto-observer observed" style="height: calc(100% + 1px); float: left;">
                        <div class="os-resize-observer"></div>
                     </div>
                     <div class="os-content-glue" style="margin: 0px -8px; width: 249px; height: 396px;"></div>
                     <div class="os-padding">
                        <div class="os-viewport os-viewport-native-scrollbars-invisible" style="overflow-y: scroll;">
                           <div class="os-content" style="padding: 0px 8px; height: 100%; width: 100%;">
                              
                              <nav class="mt-2">
                                 <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                    <li class="nav-item menu-open">
                                       <a href="#" class="nav-link active">
                                          <i class="nav-icon fas fa-tachometer-alt"></i>
                                          <p>
                                             Dashboard
                                             <i class="right fas fa-angle-left"></i>
                                          </p>
                                       </a>
                                       <ul class="nav nav-treeview">
                                          <li class="nav-item">
                                             <a href="./index.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Dashboard v1</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="./index2.html" class="nav-link active">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Dashboard v2</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="./index3.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Dashboard v3</p>
                                             </a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li class="nav-item">
                                       <a href="pages/widgets.html" class="nav-link">
                                          <i class="nav-icon fas fa-th"></i>
                                          <p>
                                             Widgets
                                             <span class="right badge badge-danger">New</span>
                                          </p>
                                       </a>
                                    </li>
                                    <li class="nav-item">
                                       <a href="#" class="nav-link">
                                          <i class="nav-icon fas fa-copy"></i>
                                          <p>
                                             Layout Options
                                             <i class="fas fa-angle-left right"></i>
                                             <span class="badge badge-info right">6</span>
                                          </p>
                                       </a>
                                       <ul class="nav nav-treeview">
                                          <li class="nav-item">
                                             <a href="pages/layout/top-nav.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Top Navigation</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/layout/top-nav-sidebar.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Top Navigation + Sidebar</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/layout/boxed.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Boxed</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/layout/fixed-sidebar.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Fixed Sidebar</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/layout/fixed-sidebar-custom.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Fixed Sidebar <small>+ Custom Area</small></p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/layout/fixed-topnav.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Fixed Navbar</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/layout/fixed-footer.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Fixed Footer</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/layout/collapsed-sidebar.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Collapsed Sidebar</p>
                                             </a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li class="nav-item">
                                       <a href="#" class="nav-link">
                                          <i class="nav-icon fas fa-chart-pie"></i>
                                          <p>
                                             Charts
                                             <i class="right fas fa-angle-left"></i>
                                          </p>
                                       </a>
                                       <ul class="nav nav-treeview">
                                          <li class="nav-item">
                                             <a href="pages/charts/chartjs.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>ChartJS</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/charts/flot.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Flot</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/charts/inline.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Inline</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/charts/uplot.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>uPlot</p>
                                             </a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li class="nav-item">
                                       <a href="#" class="nav-link">
                                          <i class="nav-icon fas fa-tree"></i>
                                          <p>
                                             UI Elements
                                             <i class="fas fa-angle-left right"></i>
                                          </p>
                                       </a>
                                       <ul class="nav nav-treeview">
                                          <li class="nav-item">
                                             <a href="pages/UI/general.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>General</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/UI/icons.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Icons</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/UI/buttons.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Buttons</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/UI/sliders.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Sliders</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/UI/modals.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Modals &amp; Alerts</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/UI/navbar.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Navbar &amp; Tabs</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/UI/timeline.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Timeline</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/UI/ribbons.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Ribbons</p>
                                             </a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li class="nav-item">
                                       <a href="#" class="nav-link">
                                          <i class="nav-icon fas fa-edit"></i>
                                          <p>
                                             Forms
                                             <i class="fas fa-angle-left right"></i>
                                          </p>
                                       </a>
                                       <ul class="nav nav-treeview">
                                          <li class="nav-item">
                                             <a href="pages/forms/general.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>General Elements</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/forms/advanced.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Advanced Elements</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/forms/editors.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Editors</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/forms/validation.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Validation</p>
                                             </a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li class="nav-item">
                                       <a href="#" class="nav-link">
                                          <i class="nav-icon fas fa-table"></i>
                                          <p>
                                             Tables
                                             <i class="fas fa-angle-left right"></i>
                                          </p>
                                       </a>
                                       <ul class="nav nav-treeview">
                                          <li class="nav-item">
                                             <a href="pages/tables/simple.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Simple Tables</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/tables/data.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>DataTables</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/tables/jsgrid.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>jsGrid</p>
                                             </a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li class="nav-header">EXAMPLES</li>
                                    <li class="nav-item">
                                       <a href="pages/calendar.html" class="nav-link">
                                          <i class="nav-icon fas fa-calendar-alt"></i>
                                          <p>
                                             Calendar
                                             <span class="badge badge-info right">2</span>
                                          </p>
                                       </a>
                                    </li>
                                    <li class="nav-item">
                                       <a href="pages/gallery.html" class="nav-link">
                                          <i class="nav-icon far fa-image"></i>
                                          <p>
                                             Gallery
                                          </p>
                                       </a>
                                    </li>
                                    <li class="nav-item">
                                       <a href="pages/kanban.html" class="nav-link">
                                          <i class="nav-icon fas fa-columns"></i>
                                          <p>
                                             Kanban Board
                                          </p>
                                       </a>
                                    </li>
                                    <li class="nav-item">
                                       <a href="#" class="nav-link">
                                          <i class="nav-icon far fa-envelope"></i>
                                          <p>
                                             Mailbox
                                             <i class="fas fa-angle-left right"></i>
                                          </p>
                                       </a>
                                       <ul class="nav nav-treeview">
                                          <li class="nav-item">
                                             <a href="pages/mailbox/mailbox.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Inbox</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/mailbox/compose.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Compose</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/mailbox/read-mail.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Read</p>
                                             </a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li class="nav-item">
                                       <a href="#" class="nav-link">
                                          <i class="nav-icon fas fa-book"></i>
                                          <p>
                                             Pages
                                             <i class="fas fa-angle-left right"></i>
                                          </p>
                                       </a>
                                       <ul class="nav nav-treeview">
                                          <li class="nav-item">
                                             <a href="pages/examples/invoice.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Invoice</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/profile.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Profile</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/e-commerce.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>E-commerce</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/projects.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Projects</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/project-add.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Project Add</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/project-edit.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Project Edit</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/project-detail.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Project Detail</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/contacts.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Contacts</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/faq.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>FAQ</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/contact-us.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Contact us</p>
                                             </a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li class="nav-item">
                                       <a href="#" class="nav-link">
                                          <i class="nav-icon far fa-plus-square"></i>
                                          <p>
                                             Extras
                                             <i class="fas fa-angle-left right"></i>
                                          </p>
                                       </a>
                                       <ul class="nav nav-treeview">
                                          <li class="nav-item">
                                             <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>
                                                   Login &amp; Register v1
                                                   <i class="fas fa-angle-left right"></i>
                                                </p>
                                             </a>
                                             <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                   <a href="pages/examples/login.html" class="nav-link">
                                                      <i class="far fa-circle nav-icon"></i>
                                                      <p>Login v1</p>
                                                   </a>
                                                </li>
                                                <li class="nav-item">
                                                   <a href="pages/examples/register.html" class="nav-link">
                                                      <i class="far fa-circle nav-icon"></i>
                                                      <p>Register v1</p>
                                                   </a>
                                                </li>
                                                <li class="nav-item">
                                                   <a href="pages/examples/forgot-password.html" class="nav-link">
                                                      <i class="far fa-circle nav-icon"></i>
                                                      <p>Forgot Password v1</p>
                                                   </a>
                                                </li>
                                                <li class="nav-item">
                                                   <a href="pages/examples/recover-password.html" class="nav-link">
                                                      <i class="far fa-circle nav-icon"></i>
                                                      <p>Recover Password v1</p>
                                                   </a>
                                                </li>
                                             </ul>
                                          </li>
                                          <li class="nav-item">
                                             <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>
                                                   Login &amp; Register v2
                                                   <i class="fas fa-angle-left right"></i>
                                                </p>
                                             </a>
                                             <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                   <a href="pages/examples/login-v2.html" class="nav-link">
                                                      <i class="far fa-circle nav-icon"></i>
                                                      <p>Login v2</p>
                                                   </a>
                                                </li>
                                                <li class="nav-item">
                                                   <a href="pages/examples/register-v2.html" class="nav-link">
                                                      <i class="far fa-circle nav-icon"></i>
                                                      <p>Register v2</p>
                                                   </a>
                                                </li>
                                                <li class="nav-item">
                                                   <a href="pages/examples/forgot-password-v2.html" class="nav-link">
                                                      <i class="far fa-circle nav-icon"></i>
                                                      <p>Forgot Password v2</p>
                                                   </a>
                                                </li>
                                                <li class="nav-item">
                                                   <a href="pages/examples/recover-password-v2.html" class="nav-link">
                                                      <i class="far fa-circle nav-icon"></i>
                                                      <p>Recover Password v2</p>
                                                   </a>
                                                </li>
                                             </ul>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/lockscreen.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Lockscreen</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/legacy-user-menu.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Legacy User Menu</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/language-menu.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Language Menu</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/404.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Error 404</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/500.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Error 500</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/pace.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Pace</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/examples/blank.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Blank Page</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="starter.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Starter Page</p>
                                             </a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li class="nav-item">
                                       <a href="#" class="nav-link">
                                          <i class="nav-icon fas fa-search"></i>
                                          <p>
                                             Search
                                             <i class="fas fa-angle-left right"></i>
                                          </p>
                                       </a>
                                       <ul class="nav nav-treeview">
                                          <li class="nav-item">
                                             <a href="pages/search/simple.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Simple Search</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="pages/search/enhanced.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Enhanced</p>
                                             </a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li class="nav-header">MISCELLANEOUS</li>
                                    <li class="nav-item">
                                       <a href="iframe.html" class="nav-link">
                                          <i class="nav-icon fas fa-ellipsis-h"></i>
                                          <p>Tabbed IFrame Plugin</p>
                                       </a>
                                    </li>
                                    <li class="nav-item">
                                       <a href="https://adminlte.io/docs/3.1/" class="nav-link">
                                          <i class="nav-icon fas fa-file"></i>
                                          <p>Documentation</p>
                                       </a>
                                    </li>
                                    <li class="nav-header">MULTI LEVEL EXAMPLE</li>
                                    <li class="nav-item">
                                       <a href="#" class="nav-link">
                                          <i class="fas fa-circle nav-icon"></i>
                                          <p>Level 1</p>
                                       </a>
                                    </li>
                                    <li class="nav-item">
                                       <a href="#" class="nav-link">
                                          <i class="nav-icon fas fa-circle"></i>
                                          <p>
                                             Level 1
                                             <i class="right fas fa-angle-left"></i>
                                          </p>
                                       </a>
                                       <ul class="nav nav-treeview">
                                          <li class="nav-item">
                                             <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Level 2</p>
                                             </a>
                                          </li>
                                          <li class="nav-item">
                                             <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>
                                                   Level 2
                                                   <i class="right fas fa-angle-left"></i>
                                                </p>
                                             </a>
                                             <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                   <a href="#" class="nav-link">
                                                      <i class="far fa-dot-circle nav-icon"></i>
                                                      <p>Level 3</p>
                                                   </a>
                                                </li>
                                                <li class="nav-item">
                                                   <a href="#" class="nav-link">
                                                      <i class="far fa-dot-circle nav-icon"></i>
                                                      <p>Level 3</p>
                                                   </a>
                                                </li>
                                                <li class="nav-item">
                                                   <a href="#" class="nav-link">
                                                      <i class="far fa-dot-circle nav-icon"></i>
                                                      <p>Level 3</p>
                                                   </a>
                                                </li>
                                             </ul>
                                          </li>
                                          <li class="nav-item">
                                             <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Level 2</p>
                                             </a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li class="nav-item">
                                       <a href="#" class="nav-link">
                                          <i class="fas fa-circle nav-icon"></i>
                                          <p>Level 1</p>
                                       </a>
                                    </li>
                                    <li class="nav-header">LABELS</li>
                                    <li class="nav-item">
                                       <a href="#" class="nav-link">
                                          <i class="nav-icon far fa-circle text-danger"></i>
                                          <p class="text">Important</p>
                                       </a>
                                    </li>
                                    <li class="nav-item">
                                       <a href="#" class="nav-link">
                                          <i class="nav-icon far fa-circle text-warning"></i>
                                          <p>Warning</p>
                                       </a>
                                    </li>
                                    <li class="nav-item">
                                       <a href="#" class="nav-link">
                                          <i class="nav-icon far fa-circle text-info"></i>
                                          <p>Informational</p>
                                       </a>
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                        </div>
                     </div>
                     <div class="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
                        <div class="os-scrollbar-track">
                           <div class="os-scrollbar-handle" style="width: 100%; transform: translate(0px, 0px);"></div>
                        </div>
                     </div>
                     <div class="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
                        <div class="os-scrollbar-track">
                           <div class="os-scrollbar-handle" style="height: 33.4069%; transform: translate(0px, 0px);"></div>
                        </div>
                     </div>
                     <div class="os-scrollbar-corner"></div>
                  </div>
               </aside>
               <div class="content-wrapper" style="min-height: 454.2px;">
                  <div class="content-header">
                     <div class="container-fluid">
                        <div class="row mb-2">
                           <div class="col-sm-6">
                              <h1 class="m-0">Dashboard v2</h1>
                           </div>
                           <div class="col-sm-6">
                              <ol class="breadcrumb float-sm-right">
                                 <li class="breadcrumb-item"><a href="#">Home</a></li>
                                 <li class="breadcrumb-item active">Dashboard v2</li>
                              </ol>
                           </div>
                        </div>
                     </div>
                  </div>
                  <section class="content">
                     <div class="container-fluid">
                        <div class="row">
                           <div class="col-12 col-sm-6 col-md-3">
                              <div class="info-box">
                                 <span class="info-box-icon bg-info elevation-1"><i class="fas fa-cog"></i></span>
                                 <div class="info-box-content">
                                    <span class="info-box-text">CPU Traffic</span>
                                    <span class="info-box-number">
                                    10
                                    <small>%</small>
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div class="col-12 col-sm-6 col-md-3">
                              <div class="info-box mb-3">
                                 <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-thumbs-up"></i></span>
                                 <div class="info-box-content">
                                    <span class="info-box-text">Likes</span>
                                    <span class="info-box-number">41,410</span>
                                 </div>
                              </div>
                           </div>
                           <div class="clearfix hidden-md-up"></div>
                           <div class="col-12 col-sm-6 col-md-3">
                              <div class="info-box mb-3">
                                 <span class="info-box-icon bg-success elevation-1"><i class="fas fa-shopping-cart"></i></span>
                                 <div class="info-box-content">
                                    <span class="info-box-text">Sales</span>
                                    <span class="info-box-number">760</span>
                                 </div>
                              </div>
                           </div>
                           <div class="col-12 col-sm-6 col-md-3">
                              <div class="info-box mb-3">
                                 <span class="info-box-icon bg-warning elevation-1"><i class="fas fa-users"></i></span>
                                 <div class="info-box-content">
                                    <span class="info-box-text">New Members</span>
                                    <span class="info-box-number">2,000</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </section>
               </div>
               <div id="sidebar-overlay"></div>
            </div>

         </div>
         <div id="sidebar-overlay"></div>`;
   
      $(document).ready(async() => {
      });
   }
}