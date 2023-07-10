import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Dashboard from "./modules/Admin/Dashboard/Dashboard";
import Productos from "./modules/Admin/Catalogs/Products/Productos";
import Employees from "./modules/Admin/Catalogs/Employees/Employees";
import Views from "./modules/Admin/Catalogs/Views/Views";
import Categories from "./modules/Admin/Catalogs/Categories/Categories";
import Landing from "./modules/Landing/Landing";
import Login from "./modules/Auth/Login/Login";
import Sidebar from "src/components/Sidebar/Sidebar";

function App() {
  const location = useLocation();
  const isLoginOrLanding =
    location.pathname === "/login" || location.pathname === "/";

  return (
    <div className="h-screen" id="page-container">
      <div className="body-container">
        {!isLoginOrLanding && <Sidebar />}
        <div className="content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/vistas" element={<Views />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/empleados" element={<Employees />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
