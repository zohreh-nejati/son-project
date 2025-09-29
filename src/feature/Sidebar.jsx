import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { useRef, useState } from "react";
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
  { title: "مستندات", icon: "/icons/sidebar/Documents-Disable.svg" },
];

function Sidebar() {
  const [isOpen] = useState();
  const dockBar = useRef(null);

  // Toggle(Open/Close) the Sidebar
  function toggleClick() {
    dockBar.current.toggle();
    // setIsOpen(dockBar.current.isOpen);
  }

  return (
    <div className="controlSidebarComponent">
      <SidebarComponent
        id="dockSidebar"
        ref={dockBar}
        enableDock={true}
        type="Push"
        dockSize="72px"
        width="255px"
        position="Right"
        isOpen={isOpen}
      >
        <div className="dock">
          <div className="sidebarHeader">
            {isOpen && (
              <img
                src="/logo/Logo.svg"
                alt="logo icon"
                className="sidebarLogo"
              ></img>
            )}
            <img
              src="/icons/sidebar/Double-arrow-Right-Disable.svg"
              alt="arrow icon"
              className="sidebarArrow"
              onClick={toggleClick}
            ></img>
          </div>

          <ul className="SidebarList">
            {sidebardData.map((list) => (
              <li key={list.title} className={list.type && "listTitle"}>
                {list.type ? (
                  ""
                ) : (
                  <img
                    src={list.icon}
                    className="e-icons"
                    alt="notif icon"
                  ></img>
                )}
                {/* {isOpen && <h1 className="e-text">{list.title}</h1>} */}
                <h1 className="e-text">{list.title}</h1>
              </li>
            ))}
          </ul>
        </div>
      </SidebarComponent>
    </div>
  );
}

// export default Sidebar;

function App() {
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
        dockSize="72px"
        width="220px"
        type="Push"
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
          <ul>
            <ul className="SidebarList" onClick={toggleClick}>
              {sidebardData.map((list) => (
                <li key={list.title} className={list.type && "listTitle"}>
                  {list.type ? (
                    ""
                  ) : (
                    <img
                      src={list.icon}
                      className="e-icons"
                      alt="notif icon"
                    ></img>
                  )}
                  {/* {isOpen && <h1 className="e-text">{list.title}</h1>} */}
                  <span className="e-text">{list.title}</span>
                </li>
              ))}
            </ul>

            {/* <li className="sidebar-item" id="toggle" onClick={toggleClick}>
              <span className="e-icons expand" />
              <span className="e-text" title="menu">
                Menu
              </span>
            </li>
            <li className="sidebar-item">
              <span className="e-icons home" />
              <span className="e-text" title="home">
                Home
              </span>
            </li>
            <li className="sidebar-item">
              <span className="e-icons profile" />
              <span className="e-text" title="profile">
                Profile
              </span>
            </li>
            <li className="sidebar-item">
              <span className="e-icons info" />
              <span className="e-text" title="info">
                Info
              </span>
            </li>
            <li className="sidebar-item">
              <span className="e-icons settings" />
              <span className="e-text" title="settings">
                Settings
              </span>
            </li> */}
          </ul>
        </div>
      </SidebarComponent>
    </div>
  );
}
export default App;
