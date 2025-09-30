import "./App.css";
import Sidebar from "./feature/Sidebar";
import Header from "./feature/Header.jsx";

function App() {
  return (
    <div className="layout" id="main-content container-fluid col-md-12 test1">
      <Sidebar />
      <div className="main_content">
        <Header />
        <div style={{ textAlign: "right" }}>test</div>
      </div>
    </div>
  );
}

export default App;
