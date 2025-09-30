import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";
// import { useRef, useState } from "react";
import "./Sidebar.css";
// const sidebardData = [
const sidebardData = [
  { nodeId: "01", nodeText: "ماژول‌های پایه" },
  {
    nodeId: "02",
    nodeText: "اعلان‌ها",
    nodeTemplate: "/icons/sidebar/Notificatins-Disable.svg",
  },
  {
    nodeId: "03",
    nodeText: "وظایف",
    nodeTemplate: "/icons/sidebar/Duties-Disable.svg",
  },
  {
    nodeId: "04",
    nodeText: "تکمیل آمار",
    nodeTemplate: "/icons/sidebar/statistic-Disable.svg",
  },
  {
    nodeId: "05",
    nodeText: "مدیریت سامانه",
    nodeTemplate: "/icons/sidebar/System-management-Disable.svg",
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
    nodeTemplate: "/icons/sidebar/Reports-Disable.svg",
  },
  {
    nodeId: "07",
    nodeText: "داشبوردها",
    nodeTemplate: "/icons/sidebar/Dashboard-Disable.svg",
  },
  {
    nodeId: "08",
    nodeText: "مستندات",
    nodeTemplate: "/icons/sidebar/Documents-Disable.svg",
  },
  { nodeId: "09", nodeText: "ماژول‌های مدیریت مالی" },
  {
    nodeId: "10",
    nodeText: "گزارشات و صورت‌های مالی",
    nodeTemplate: "/icons/sidebar/Bar-Chart-Disable.svg",
  },
  {
    nodeId: "11",
    nodeText: "حسابداری هزینه‌ها",
    nodeTemplate: "/icons/sidebar/Money-bill-Disable.svg",
  },
  {
    nodeId: "12",
    nodeText: "تجمیع و بستن حساب‌ها",
    nodeTemplate: "/icons/sidebar/User-Account-Disable.svg",
  },
  {
    nodeId: "13",
    nodeText: "تلفیق",
    nodeTemplate: "/icons/sidebar/Shape-union-Disable.svg",
  },
  {
    nodeId: "14",
    nodeText: "مجامع",
    nodeTemplate: "/icons/sidebar/Collection-Disable.svg",
  },
  { nodeId: "15", nodeText: "ماژول‌های مدیریت استراتژی" },
  {
    nodeId: "16",
    nodeText: "پیش‌بینی و برنامه‌ریزی",
    nodeTemplate: "/icons/sidebar/Note-Disable.svg",
  },
  {
    nodeId: "17",
    nodeText: "بودجه‌ریزی",
    nodeTemplate: "/icons/sidebar/Wallet-Disable.svg",
  },
  {
    nodeId: "18",
    nodeText: "کارت امتیازی متوازن",
    nodeTemplate: "/icons/sidebar/Documents-Disable.svg",
  },
  {
    nodeId: "19",
    nodeText: "کارت امتیازی متوازن فردی",
    nodeTemplate: "/icons/sidebar/Credit-Card-Disable.svg",
  },
  { nodeId: "20", nodeText: "سایر ماژول‌ها" },
  {
    nodeId: "21",
    nodeText: "حسابرسی",
    nodeTemplate: "/icons/sidebar/Contact-card-Disable.svg",
  },
];

function Sidebar() {
  // let dockBar;
  let sidebarobj;
  let treeviewobj;
  let target = ".main_content";
  let fields = {
    dataSource: sidebardData,
    id: "nodeId",
    text: "nodeText",
    child: "nodeChild",
  };
  // Toggle(Open/Close) the Sidebar
  // function toggleClick() {
  //   sidebarobj.toggle();
  // }

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
    <SidebarComponent
      id="dockSidebar"
      ref={(Sidebar) => (sidebarobj = Sidebar)}
      enableDock={true}
      dockSize="72px"
      width="260px"
      target={target}
      enableRtl
      position="Right"
      // type="Push"
      created={onCreate}
      close={onClose}
    >
      <div className="dock">
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
        <div>
          <TreeViewComponent
            id="main-treeview"
            ref={(Treeview) => (treeviewobj = Treeview)}
            fields={fields}
            expandOn="Click"
          />
        </div>

        {/* <ul className="SidebarList">
          {sidebardData.map((list) => (
            <li key={list.title} className={list.type && "listTitle"}>
              {list.type ? (
                ""
              ) : (
                <img src={list.icon} className="e-icons" alt="notif icon"></img>
              )}
              <span className="e-text">{list.title}</span>
            </li>
          ))}
        </ul> */}
      </div>
    </SidebarComponent>
  );
}
export default Sidebar;
