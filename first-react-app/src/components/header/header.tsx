import React from "react";

import Navigation from "../navigation/navigation";

const Header = () => {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <span className="font-bold">First App</span>

      <Navigation />
    </header>
  );
};

export default Header;
