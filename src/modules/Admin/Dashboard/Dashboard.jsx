import "./_dashboardStyle.css";
import Sidebar from "src/components/Sidebar/Sidebar";
import { useState, useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_MENUS":
      return { userMenus: action.payload };
    case "SET_SELECTED_MENU":
      return { selectedMenu: action.payload };
    default:
      return state;
  }
};
const initialState = {
  userMenus: [],
  selectedMenu: ""
};

function Dashboard() {
  return (
    <>
      <div id="page-container">
        <div className="body-container">
          <Sidebar></Sidebar>
          <div className="content">Dashboard</div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
