import "./App.css";
import Sidebar from "./feature/Sidebar";
import Appbar from "./feature/Appbar.jsx";
import MainContentHeader from "./feature/MainContentHeader.jsx";
import UserAndAccessTable from "./feature/tables/UsersAndAccessTable.jsx";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content" id="main-text">
        <div>
          <Appbar />
          <MainContentHeader />

          <div className="table_wrapper">
            <UserAndAccessTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
