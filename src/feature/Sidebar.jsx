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
  // let target = ".main-content";
  let dockSize = "60px";

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
            height="100%"
            target=".main-content"
            style={{ visibility: "hidden" }}
            created={onCreate}
            close={onClose}
            dockSize={dockSize}
            enableDock={true}
            enableRtl={true}
            position="Right"
            type="Push"
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
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
