import React from "react";
import { Link } from "react-router-dom";

import useMenuController from "./menu-controller";

interface IMenu {
  onCloseMenu: () => void;
}

const Menu = ({ onCloseMenu }: IMenu) => {
  const { menuData, redirectToLogin } = useMenuController();

  return (
    <>
      <div
        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
        onClick={onCloseMenu}
      ></div>

      <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3">
        <span className="font-bold">First App</span>

        <ul>
          {menuData.map((menuItem) => (
            <li key={menuItem.key}>
              <Link
                className="text-blue-500 py-3 border-t border-b block"
                to={menuItem.path}
                onClick={() => {
                  if (menuItem.key === "logout") {
                    redirectToLogin();
                  } else {
                    onCloseMenu();
                  }
                }}
              >
                {menuItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
