import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
// import { useRef, useState } from "react";
import "./Sidebar.css";

const sidebardData = [
  { title: "ماژول‌های پایه", type: "title" },
  { title: "اعلان‌ها", icon: "/icons/sidebar/Notificatins-Disable.svg" },
  { title: "وظایف", icon: "/icons/sidebar/Duties-Disable.svg" },
  { title: "تکمیل آمار", icon: "/icons/sidebar/statistic-Disable.svg" },
  {
    title: "مدیریت سامانه",
    icon: "/icons/sidebar/System-management-Disable.svg",
  },
  { title: "گزارش‌ها", icon: "/icons/sidebar/Reports-Disable.svg" },
  { title: "داشبوردها", icon: "/icons/sidebar/Dashboard-Disable.svg" },
  { title: "مستندات", icon: "/icons/sidebar/Documents-Disable.svg" },
  { title: "ماژول‌های مدیریت مالی", type: "title" },
  {
    title: "گزارشات و صورت‌های مالی",
    icon: "/icons/sidebar/Bar-Chart-Disable.svg",
  },
  { title: "حسابداری هزینه‌ها", icon: "/icons/sidebar/Money-bill-Disable.svg" },
  {
    title: "تجمیع و بستن حساب‌ها",
    icon: "/icons/sidebar/User-Account-Disable.svg",
  },
  { title: "تلفیق", icon: "/icons/sidebar/Shape-union-Disable.svg" },
  { title: "مجامع", icon: "/icons/sidebar/Collection-Disable.svg" },
  { title: "ماژول‌های مدیریت استراتژی", type: "title" },
  {
    title: "پیش‌بینی و برنامه‌ریزی",
    icon: "/icons/sidebar/Note-Disable.svg",
  },
  { title: "بودجه‌ریزی", icon: "/icons/sidebar/Wallet-Disable.svg" },
  {
    title: "کارت امتیازی متوازن",
    icon: "/icons/sidebar/Documents-Disable.svg",
  },
  {
    title: "کارت امتیازی متوازن فردی",
    icon: "/icons/sidebar/Credit-Card-Disable.svg",
  },
  { title: "سایر ماژول‌ها", type: "title" },
  { title: "حسابرسی", icon: "/icons/sidebar/Contact-card-Disable.svg" },
];

function Sidebar() {
  let dockBar;
  // Toggle(Open/Close) the Sidebar
  function toggleClick() {
    dockBar.toggle();
  }

  return (
    <SidebarComponent
      id="dockSidebar"
      ref={(Sidebar) => (dockBar = Sidebar)}
      enableDock={true}
      dockSize="72px"
      width="260px"
      target="test1"
      enableRtl
      position="Right"
      // type="Push"
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

        <ul className="SidebarList">
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
        </ul>
      </div>
    </SidebarComponent>
  );
}
export default Sidebar;
