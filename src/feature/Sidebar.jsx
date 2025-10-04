import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";
// import { useRef, useState } from "react";
import "./Sidebar.css";
// const sidebardData = [
// const sidebardData = [
//   { nodeId: "01", nodeText: "ماژول‌های پایه" },
//   {
//     nodeId: "02",
//     nodeText: "اعلان‌ها",
//     nodeTemplate: "/icons/sidebar/Notificatins-Disable.svg",
//   },
//   {
//     nodeId: "03",
//     nodeText: "وظایف",
//     nodeTemplate: "/icons/sidebar/Duties-Disable.svg",
//   },
//   {
//     nodeId: "04",
//     nodeText: "تکمیل آمار",
//     nodeTemplate: "/icons/sidebar/statistic-Disable.svg",
//   },
//   {
//     nodeId: "05",
//     nodeText: "مدیریت سامانه",
//     nodeTemplate: "/icons/sidebar/System-management-Disable.svg",
//     nodeChild: [
//       { nodeId: "05-01", nodeText: "Calendar" },
//       { nodeId: "05-02", nodeText: "DatePicker" },
//       { nodeId: "05-03", nodeText: "DateTimePicker" },
//       { nodeId: "05-04", nodeText: "DateRangePicker" },
//       { nodeId: "05-05", nodeText: "TimePicker" },
//       { nodeId: "05-06", nodeText: "SideBar" },
//     ],
//   },
//   {
//     nodeId: "06",
//     nodeText: "گزارش‌ها",
//     nodeTemplate: "/icons/sidebar/Reports-Disable.svg",
//   },
//   {
//     nodeId: "07",
//     nodeText: "داشبوردها",
//     nodeTemplate: "/icons/sidebar/Dashboard-Disable.svg",
//   },
//   {
//     nodeId: "08",
//     nodeText: "مستندات",
//     nodeTemplate: "/icons/sidebar/Documents-Disable.svg",
//   },
//   { nodeId: "09", nodeText: "ماژول‌های مدیریت مالی" },
//   {
//     nodeId: "10",
//     nodeText: "گزارشات و صورت‌های مالی",
//     nodeTemplate: "/icons/sidebar/Bar-Chart-Disable.svg",
//   },
//   {
//     nodeId: "11",
//     nodeText: "حسابداری هزینه‌ها",
//     nodeTemplate: "/icons/sidebar/Money-bill-Disable.svg",
//   },
//   {
//     nodeId: "12",
//     nodeText: "تجمیع و بستن حساب‌ها",
//     nodeTemplate: "/icons/sidebar/User-Account-Disable.svg",
//   },
//   {
//     nodeId: "13",
//     nodeText: "تلفیق",
//     nodeTemplate: "/icons/sidebar/Shape-union-Disable.svg",
//   },
//   {
//     nodeId: "14",
//     nodeText: "مجامع",
//     nodeTemplate: "/icons/sidebar/Collection-Disable.svg",
//   },
//   { nodeId: "15", nodeText: "ماژول‌های مدیریت استراتژی" },
//   {
//     nodeId: "16",
//     nodeText: "پیش‌بینی و برنامه‌ریزی",
//     nodeTemplate: "/icons/sidebar/Note-Disable.svg",
//   },
//   {
//     nodeId: "17",
//     nodeText: "بودجه‌ریزی",
//     nodeTemplate: "/icons/sidebar/Wallet-Disable.svg",
//   },
//   {
//     nodeId: "18",
//     nodeText: "کارت امتیازی متوازن",
//     nodeTemplate: "/icons/sidebar/Documents-Disable.svg",
//   },
//   {
//     nodeId: "19",
//     nodeText: "کارت امتیازی متوازن فردی",
//     nodeTemplate: "/icons/sidebar/Credit-Card-Disable.svg",
//   },
//   { nodeId: "20", nodeText: "سایر ماژول‌ها" },
//   {
//     nodeId: "21",
//     nodeText: "حسابرسی",
//     nodeTemplate: "/icons/sidebar/Contact-card-Disable.svg",
//   },
// ];

// function Sidebar() {
//   // let dockBar;
//   let sidebarobj;
//   let treeviewobj;
//   let target = ".main_content";

//   let fields = {
//     dataSource: sidebardData,
//     id: "nodeId",
//     text: "nodeText",
//     child: "nodeChild",
//   };
//   // Toggle(Open/Close) the Sidebar
//   // function toggleClick() {
//   //   sidebarobj.toggle();
//   // }

//   function onCreate() {
//     sidebarobj.element.style.visibility = "";
//   }

//   function onClose() {
//     treeviewobj.collapseAll();
//   }

//   function toggleClick() {
//     if (sidebarobj.isOpen) {
//       sidebarobj.hide();
//       treeviewobj.collapseAll();
//     } else {
//       sidebarobj.show();
//       treeviewobj.expandAll();
//     }
//   }

//   return (
//     <>
//       <SidebarComponent
//         // id="dockSidebar"
//         id="sidebar-treeview"
//         ref={(Sidebar) => (sidebarobj = Sidebar)}
//         enableDock={true}
//         dockSize="72px"
//         width="260px"
//         target={target}
//         enableRtl
//         position="Right"
//         // type="Push"
//         created={onCreate}
//         close={onClose}
//       >
//         <div className="dock">
//           <div className="sidebarHeader">
//             <span className="e-text">
//               <img
//                 src="/logo/Logo.svg"
//                 alt="logo icon"
//                 className="sidebarLogo"
//               ></img>
//             </span>
//             <span className="e-icon">
//               <img
//                 src="/icons/sidebar/Double-arrow-Right-Disable.svg"
//                 alt="arrow icon e-icons"
//                 className="sidebarArrow"
//                 onClick={toggleClick}
//               ></img>
//             </span>
//           </div>

//           <div className="main-menu">
//             <div>
//               <TreeViewComponent
//                 id="main-treeview"
//                 ref={(Treeview) => (treeviewobj = Treeview)}
//                 fields={fields}
//                 expandOn="Click"
//               />
//             </div>
//           </div>

//           {/* <ul className="SidebarList">
//           {sidebardData.map((list) => (
//             <li key={list.title} className={list.type && "listTitle"}>
//               {list.type ? (
//                 ""
//               ) : (
//                 <img src={list.icon} className="e-icons" alt="notif icon"></img>
//               )}
//               <span className="e-text">{list.title}</span>
//             </li>
//           ))}
//         </ul> */}
//         </div>
//       </SidebarComponent>
//       <div className="main_content">
//         <p>helo</p>
//       </div>
//     </>
//   );
// }
// export default Sidebar;

function Sidebar() {
  let sidebarobj;
  let treeviewobj;
  let data = [
    { nodeId: "01", nodeText: "ماژول‌های پایه" },
    {
      nodeId: "02",
      nodeText: "اعلان‌ها",
      icon: "/icons/sidebar/Notificatins-Disable.svg",
    },
    {
      nodeId: "03",
      nodeText: "وظایف",
      icon: "/icons/sidebar/Duties-Disable.svg",
    },
    {
      nodeId: "04",
      nodeText: "تکمیل آمار",
      icon: "/icons/sidebar/statistic-Disable.svg",
    },
    {
      nodeId: "05",
      nodeText: "مدیریت سامانه",
      icon: "/icons/sidebar/System-management-Disable.svg",
      nodeChild: [
        { nodeId: "05-01", nodeText: "Calendar" },
        { nodeId: "05-02", nodeText: "DatePicker" },
        { nodeId: "05-03", nodeText: "DateTimePicker" },
        { nodeId: "05-04", nodeText: "DateRangePicker" },
        { nodeId: "05-05", nodeText: "TimePicker" },
        { nodeId: "05-06", nodeText: "SideBar" },
      ],
    },
    {
      nodeId: "06",
      nodeText: "گزارش‌ها",
      icon: "/icons/sidebar/Reports-Disable.svg",
    },
    {
      nodeId: "07",
      nodeText: "داشبوردها",
      icon: "/icons/sidebar/Dashboard-Disable.svg",
    },
    {
      nodeId: "08",
      nodeText: "مستندات",
      icon: "/icons/sidebar/Documents-Disable.svg",
    },
    { nodeId: "09", nodeText: "ماژول‌های مدیریت مالی" },
    {
      nodeId: "10",
      nodeText: "گزارشات و صورت‌های مالی",
      icon: "/icons/sidebar/Bar-Chart-Disable.svg",
    },
    {
      nodeId: "11",
      nodeText: "حسابداری هزینه‌ها",
      icon: "/icons/sidebar/Money-bill-Disable.svg",
    },
    {
      nodeId: "12",
      nodeText: "تجمیع و بستن حساب‌ها",
      icon: "/icons/sidebar/User-Account-Disable.svg",
    },
    {
      nodeId: "13",
      nodeText: "تلفیق",
      icon: "/icons/sidebar/Shape-union-Disable.svg",
    },
    {
      nodeId: "14",
      nodeText: "مجامع",
      icon: "/icons/sidebar/Collection-Disable.svg",
    },
    { nodeId: "15", nodeText: "ماژول‌های مدیریت استراتژی" },
    {
      nodeId: "16",
      nodeText: "پیش‌بینی و برنامه‌ریزی",
      icon: "/icons/sidebar/Note-Disable.svg",
    },
    {
      nodeId: "17",
      nodeText: "بودجه‌ریزی",
      icon: "/icons/sidebar/Wallet-Disable.svg",
    },
    {
      nodeId: "18",
      nodeText: "کارت امتیازی متوازن",
      icon: "/icons/sidebar/Documents-Disable.svg",
    },
    {
      nodeId: "19",
      nodeText: "کارت امتیازی متوازن فردی",
      icon: "/icons/sidebar/Credit-Card-Disable.svg",
    },
    { nodeId: "20", nodeText: "سایر ماژول‌ها" },
    {
      nodeId: "21",
      nodeText: "حسابرسی",
      icon: "/icons/sidebar/Contact-card-Disable.svg",
    },
  ];
  let width = "290px";
  let target = ".main-content";
  let mediaQuery = "(min-width: 600px)";
  let dockSize = "42px";

  let fields = {
    dataSource: data,
    id: "nodeId",
    text: "nodeText",
    child: "nodeChild",
    imageUrl: "icon",
  };
  function onCreate() {
    sidebarobj.element.style.visibility = "";
  }
  function onClose() {
    treeviewobj.collapseAll();
  }
  function toggleClick() {
    if (sidebarobj.isOpen) {
      sidebarobj.hide();
      treeviewobj.collapseAll();
    } else {
      sidebarobj.show();
      treeviewobj.expandAll();
    }
  }
  return (
    <div className="control-section">
      <div id="wrapper">
        <div className="col-lg-12 col-sm-12 col-md-12">
          {/* <div className="main-header" id="header-section">

            <ul className="header-list">
              <li
                className="float-left header-style icon-menu"
                id="hamburger"
                onClick={toggleClick}
                ref={(sidebar) => (sidebarobj = sidebar)}
              ></li>
              <li className="float-left header-style nav-pane">
                <b>Navigation Pane</b>
              </li>
              <li className="header-style float-right support border-left">
                <b>Support</b>
              </li>
            </ul>
          </div> */}

          <SidebarComponent
            id="sidebar-treeview"
            ref={(Sidebar) => (sidebarobj = Sidebar)}
            width={width}
            target={target}
            mediaQuery={mediaQuery}
            style={{ visibility: "hidden" }}
            created={onCreate}
            close={onClose}
            dockSize={dockSize}
            enableDock={true}
          >
            <div className="sidebarHeader">
              <span className="e-text">
                <img
                  src="/logo/Logo.svg"
                  alt="logo icon"
                  className="sidebarLogo"
                ></img>
              </span>
              <span className="e-icon">
                <img
                  src="/icons/sidebar/Double-arrow-Right-Disable.svg"
                  alt="arrow icon e-icons"
                  className="sidebarArrow"
                  onClick={toggleClick}
                ></img>
              </span>
            </div>

            <div className="main-menu">
              <div>
                <TreeViewComponent
                  id="main-treeview"
                  ref={(Treeview) => (treeviewobj = Treeview)}
                  fields={fields}
                  expandOn="Click"
                />
              </div>
            </div>
          </SidebarComponent>
          <div className="main-content" id="main-text">
            <div className="sidebar-content">
              <h2 className="sidebar-heading">
                {" "}
                Responsive Sidebar With Treeview
              </h2>
              <p className="paragraph-content">
                {" "}
                This is a graphical aid for visualising and categorising the
                site, in the style of an expandable and collapsable treeview
                component. It auto-expands to display the node(s), if any,
                corresponding to the currently viewed title, highlighting that
                node(s) and its ancestors. Load-on-demand when expanding nodes
                is available where supported (most graphical browsers), falling
                back to a full-page reload. MediaWiki-supported caching, aside
                from squid, has been considered so that unnecessary re-downloads
                of content are avoided where possible. The complete
                expanded/collapsed state of the treeview persists across page
                views in most situations.
              </p>
              <p className="paragraph-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="line"></div>
              <h2 className="sidebar-heading">Lorem Ipsum Dolor</h2>
              <p className="paragraph-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className="line"></div>
              <h2 className="sidebar-heading"> Lorem Ipsum Dolor</h2>
              <p className="paragraph-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="line"></div>
              <h2 className="sidebar-heading"> Lorem Ipsum Dolor</h2>
              <p className="paragraph-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
