import React, { useEffect, useState } from "react";
// import BackIcon from "../../png/LeftArrow.png";
// import MenuIcon from "../../png/drag_handle_black_24dp.png";
import { Link } from "react-router-dom";
import "./_sidebar.scss";
import { useContext } from "react";
import UserMenusContext from "src/context/UserMenusContext";

const Sidebar = (props) => {
    // const menuClass = props.showMenu ? "leftmenu open" : "leftmenu close";
    // const [activeMenu, setActiveMenu] = useState(null);
    // const { userMenus, selectedMenu, SetSelectedMenuFunc } = useContext(
    //     UserMenusContext
    // );

    // useEffect(() => {
    //     if (userMenus) {
    //         const handleClick = function () {
    //             if (activeMenu === this) {
    //                 this.classList.remove("active");
    //                 const subPanel = this.nextElementSibling;
    //                 subPanel.style.maxHeight = null;
    //                 setActiveMenu(null);
    //             } else {
    //                 if (activeMenu) {
    //                     activeMenu.classList.remove("active");
    //                     const subPanel = activeMenu.nextElementSibling;
    //                     subPanel.style.maxHeight = null;
    //                 }
    //                 this.classList.add("active");
    //                 const subPanel = this.nextElementSibling;
    //                 subPanel.style.maxHeight = subPanel.scrollHeight + "px";
    //                 setActiveMenu(this);
    //             }
    //         };

    //         const accordions = document.querySelectorAll(".accordion");
    //         accordions.forEach((accordion) => {
    //             accordion.addEventListener("click", handleClick);
    //         });

    //         return () => {
    //             accordions.forEach((accordion) => {
    //                 accordion.removeEventListener("click", handleClick);
    //             });
    //         };
    //     }
    // }, [userMenus, activeMenu]);

    // return (
    //     <div id="left-menu" className={menuClass}>
    //         <div className="leftmenu-button">
    //             <button onClick={props.MenuFunction}>
    //                 <span className='material-icons'>
    //                     {/* {props.showMenu == true ? 'arrow_back' : MenuIcon} */}
    //                 </span>
    //             </button>
    //         </div>
    //         <ul className="leftmenu-list">
    //             {userMenus &&
    //                 userMenus.map((menu, index) => {
    //                     return (
    //                         <li key={index}>
    //                             {menu.childs.length !== 0 ? (
    //                                 <div className={`leftmenu-item ${menu.childs.length !== 0 ? "accordion" : "" }`}>
    //                                     {menu.menu_nombre}
    //                                 </div>
    //                             ) : (
    //                                 <Link
    //                                     to={menu.menu_url}
    //                                     onClick={() => SetSelectedMenuFunc(menu.menu_nombre)}
    //                                     className={`leftmenu-item ${selectedMenu === menu.menu_nombre ? "item-selected" : ""
    //                                         }`}
    //                                 >
    //                                     {menu.menu_nombre}
    //                                 </Link>
    //                             )}
    //                             {menu.childs.length !== 0 && (
    //                                 <div className="submenu-panel">
    //                                     {menu.childs.map((submenu, index2) => {
    //                                         return (
    //                                             <Link
    //                                                 key={index2}
    //                                                 to={submenu.menu_url}
    //                                                 className={`leftmenu-subitem ${selectedMenu === submenu.menu_nombre
    //                                                         ? "item-selected"
    //                                                         : ""
    //                                                     }`}
    //                                                 onClick={() => SetSelectedMenuFunc(submenu.menu_nombre)}
    //                                             >
    //                                                 {submenu.menu_nombre}
    //                                             </Link>
    //                                         );
    //                                     })}
    //                                 </div>
    //                             )}
    //                         </li>
    //                     );
    //                 })}
    //         </ul>
    //     </div>
    // );
};

export default Sidebar;