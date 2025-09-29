import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import styles from "./Sidebar.module.css";

const sidebardData = [
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
];

function Sidebar() {
  let dockBar;
  // Toggle(Open/Close) the Sidebar
  function toggleClick() {
    dockBar.toggle();
  }
  return (
    <div className="control-section">
      {/* Initializing the Sidebar component */}
      <SidebarComponent
        id="dockSidebar"
        ref={(Sidebar) => (dockBar = Sidebar)}
        enableDock={true}
        type="Push"
        dockSize="72px"
        width="255px"
        position="Right"
      >
        <div className="dock">
          <ul className={styles.SidebarList}>
            {sidebardData.map((list) => (
              <li key={list.title} onClick={toggleClick}>
                <img src={list.icon} alt="notif icon"></img>
                <h1 className="e-text" title="menu">
                  {list.title}
                </h1>
              </li>
            ))}
          </ul>
        </div>
      </SidebarComponent>
    </div>
  );
}

export default Sidebar;
