import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import useNavigationController from "./navigation-controller";
import Menu from "../menu";

const Navigation = () => {
  const { isMenuVisible, onMenuVisible, onCloseMenu } =
    useNavigationController();

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={onMenuVisible} />

        {isMenuVisible && <Menu onCloseMenu={onCloseMenu} />}
      </span>
    </nav>
  );
};

export default Navigation;
