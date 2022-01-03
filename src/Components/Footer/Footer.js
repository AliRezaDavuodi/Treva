import React from "react";

import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterLogo />
      <FooterNav />
    </footer>
  );
};

export default Footer;
