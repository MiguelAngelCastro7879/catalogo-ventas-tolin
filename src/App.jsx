import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./modules/Admin/Dashboard/Dashboard";
import Productos from "./modules/Admin/Catalogs/Products/Productos";
import Landing from "./modules/Landing/Landing";
import Login from "./modules/Auth/Login/Login";

import Sidebar from 'src/components/Sidebar/Sidebar';
import { useState, useEffect, useReducer } from 'react';


function App() {
  return (
    <>
      <div className="h-screen">
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Productos" element={<Productos />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
