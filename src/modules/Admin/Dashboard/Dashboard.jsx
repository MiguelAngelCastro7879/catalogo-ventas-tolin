import "./_dashboardStyle.css";
import Sidebar from "src/components/Sidebar/Sidebar";
import { useState, useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
      case 'SET_USER_MENUS':
          return { userMenus: action.payload }
      case 'SET_SELECTED_MENU':
          return { selectedMenu: action.payload }
      default:
          return state
  }
}
const initialState = {
  userMenus: [],
  selectedMenu: ""
}

function Dashboard() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [userMenus, setUserMenus] = useState()
  const [selectedMenu, setSelectedMenu] = useState()
  const [showMenu, setShowMenu] = useState(false);
  
  const getUserMenus = async () => {
      // const response = await fetch(route("user.menus"))
      // const data = await response.json()
      // dispatch({ type: 'SET_USER_MENUS', payload: data })
      // setUserMenus(data)
  };

  const SetSelectedMenuFunc = (menu) => {
      dispatch({ type: 'SET_SELECTED_MENU', payload: menu })
      setSelectedMenu(menu)
  }

  const MenuFunction = () => {
      setShowMenu(!showMenu);
  };

  useEffect(() => {
      if (!userMenus) {
          getUserMenus();
      }
  }, [userMenus]);
  return (
    <>
      <Sidebar
        MenuFunction={MenuFunction}
        showMenu={showMenu}
        auth={[]}
        menus={[]}
      ></Sidebar>
      Dashboard
    </>
  );
}

export default Dashboard;
