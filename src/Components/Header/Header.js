import React from "react";
import Navbar from "../Navbar/Navbar";

import "./Header.scss";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <HeaderContent />
    </header>
  );
};

export default Header;
