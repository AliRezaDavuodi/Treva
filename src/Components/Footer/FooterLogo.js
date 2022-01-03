import React from "react";

import logo from "../../assets/treva.svg";

import "./FooterLogo.scss";

const FooterLogo = () => {
  return (
    <div className="footer__logo">
      <img alt="footer logo" src={logo} />
    </div>
  );
};

export default FooterLogo;
