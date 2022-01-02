import React from "react";

import logo from "../../assets/treva.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img alt="footer logo" src={logo} />
      </div>
      <div className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item footer__item--head">
            <button>Quick Links</button>
            <ul className="footer__sub--List">
              <li className="footer__item footer__sub--item">
                <button>About Us</button>
              </li>
              <li className="footer__item footer__sub--item">
                <button>Blog</button>
              </li>
              <li className="footer__item footer__sub--item">
                <button>Contact</button>
              </li>
              <li className="footer__item footer__sub--item">
                <button>FAQ</button>
              </li>
            </ul>
          </li>
          <li className="footer__item footer__item--head">
            <button>Legal Stuff</button>
            <ul className="footer__sub--List ">
              <li className="footer__item footer__sub--item">
                <button>Disclaimer</button>
              </li>
              <li className="footer__item footer__sub--item">
                <button>Financing</button>
              </li>
              <li className="footer__item footer__sub--item">
                <button>Privacy Policy</button>
              </li>
              <li className="footer__item footer__sub--item">
                <button>Terms of Service</button>
              </li>
            </ul>
          </li>
          <li className="footer__item footer__item--head">
            <button>Social</button>
            <ul className="footer__sub--List">
              <li className="footer__item footer__sub--item footer__item--icon">
                <img alt="facebook" src={Facebook} />
                <button>Facebook</button>
              </li>
              <li className="footer__item footer__sub--item footer__item--icon">
                <img alt="Twitter" src={Twitter} />
                <button>Twitter</button>
              </li>
              <li className="footer__item footer__sub--item footer__item--icon">
                <img alt="Instagram" src={Instagram} />
                <button>Instagram</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
