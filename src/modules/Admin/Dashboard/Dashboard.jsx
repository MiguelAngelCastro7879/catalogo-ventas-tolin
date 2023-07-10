
// import Sidebar from "src/components/Sidebar/Sidebar";
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

function Dashboard(props) {
  return (
    <>
                ESTE ES UN PINSHI DASHBOARD
    </>
  );
}

export default Dashboard;
