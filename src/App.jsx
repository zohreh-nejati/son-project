import "./App.css";
import Sidebar from "./feature/Sidebar";
import Header from "./feature/Header.jsx";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content" id="main-text">
        <Header />
      </div>
    </div>
  );
}

export default App;
