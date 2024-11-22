import { useHistory } from "react-router-dom";

const useMenuController = () => {
  const history = useHistory();

  const menuData = [
    {
      name: "Home",
      key: "home",
      path: "/",
    },
    {
      name: "About Us",
      key: "aboutus",
      path: "/about",
    },
    {
      name: "Products",
      key: "products",
      path: "/products",
    },
    {
      name: "Logout",
      key: "logout",
      path: "/login",
    },
  ];

  const redirectToLogin = () => {
    history.push("/login");
    localStorage.clear();
  };

  return { menuData, redirectToLogin };
};

export default useMenuController;
