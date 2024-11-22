import { useState } from "react";

const useNavigationController = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const onMenuVisible = () => {
    setMenuVisible(!isMenuVisible);
  };

  const onCloseMenu = () => {
    setMenuVisible(false);
  };

  return {
    isMenuVisible,
    onMenuVisible,
    onCloseMenu,
  };
};

export default useNavigationController;
