import React, { useEffect, useState } from "react";
// import BackIcon from "../../png/LeftArrow.png";
// import MenuIcon from "../../png/drag_handle_black_24dp.png";
import { Link } from "react-router-dom";
import "./_sidebar.scss";

const Sidebar = (props) => {
    // const menuClass = props.showMenu ? "leftmenu open" : "leftmenu close";
    const menuClass = true ? "leftmenu open" : "leftmenu close";
    const [activeMenu, setActiveMenu] = useState(null);
    const [userMenus, setUserMenus] = useState();
    
    useEffect(() => {
        setUserMenus(JSON.parse(localStorage.getItem('menus')));
    }, []);

    
    useEffect(() => {
        if (userMenus) {
            const handleClick = function () {
                if (activeMenu === this) {
                    this.classList.remove("active");
                    const subPanel = this.nextElementSibling;
                    subPanel.style.maxHeight = null;
                    setActiveMenu(null);
                } else {
                    if (activeMenu) {
                        activeMenu.classList.remove("active");
                        const subPanel = activeMenu.nextElementSibling;
                        subPanel.style.maxHeight = null;
                    }
                    this.classList.add("active");
                    const subPanel = this.nextElementSibling;
                    subPanel.style.maxHeight = subPanel.scrollHeight + "px";
                    setActiveMenu(this);
                }
            };

            const accordions = document.querySelectorAll(".accordion");
            accordions.forEach((accordion) => {
                accordion.addEventListener("click", handleClick);
            });

            return () => {
                accordions.forEach((accordion) => {
                    accordion.removeEventListener("click", handleClick);
                });
            };
        }
    }, [userMenus, activeMenu]);

    return (
        // <>
        // HOLAAAAAAAAa
        // </>
        <div id="left-menu" className={menuClass}>
            {/* <div className="leftmenu-button">
                <button onClick={props.MenuFunction}>
                    <span className='material-icons'>
                    </span>
                </button>
            </div> */}
            <ul className="leftmenu-list">
                {userMenus &&
                    userMenus.map((menu, index) => {
                        return (
                            <li key={index}>
                                {menu.views.length !== 0 ? (
                                    <div className={`leftmenu-item ${menu.views.length !== 0 ? "accordion" : "" }`}>
                                        {menu.category}
                                    </div>
                                ) : (
                                    // <Link
                                    //     to={menu.menu_url}
                                    //     onClick={() => SetSelectedMenuFunc(menu.menu_nombre)}
                                    //     className={`leftmenu-item ${selectedMenu === menu.menu_nombre ? "item-selected" : ""
                                    //         }`}
                                    // >
                                    //     {menu.menu_nombre}
                                    // </Link>
                                    <>
                                    </>
                                )}
                                {menu.views.length !== 0 && (
                                    <div className="submenu-panel">
                                        {menu.views.map((submenu, index2) => {
                                            return (
                                                <Link
                                                    key={index2}
                                                    to={'/'+submenu.name}
                                                    className={`leftmenu-subitem`}
                                                    // onClick={() => SetSelectedMenuFunc(submenu.menu_nombre)}
                                                >
                                                    {submenu.name}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Sidebar;