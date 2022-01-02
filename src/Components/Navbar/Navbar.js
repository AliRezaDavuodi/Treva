import React from "react";

import logo from "../../assets/treva.svg";
import Button from "../Button/Button";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img alt="logo" src={logo} />
      </div>
      <div className="navbar__actions">
        <Button className="btn rounded"> signin </Button>
        <Button className="btn rounded"> signout </Button>
      </div>
    </nav>
  );
};

export default Navbar;
