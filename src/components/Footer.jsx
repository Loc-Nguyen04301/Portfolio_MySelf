import React from "react";
import { UilFacebook, UilGithub, UilInstagram } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">LocNguyen</h1>
            <span className="footer__subtitle">Frontend Developer</span>
          </div>
          <ul className="footer__links">
            <li>
              <a href="" className="footer__link">
                About me
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>

            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>

            <div className="footer__socials">
              <a href="https://www.facebook.com/profile.php?id=100009072109785" className="footer__social">
                <UilFacebook />
              </a>
              <a href="https://github.com/Loc-Nguyen04301" className="footer__social">
                <UilGithub />
              </a>
              <a href="#" className="footer__social">
                <UilInstagram />
              </a>
            </div>
          </ul>
        </div>

        <p className="footer__copy">&#169; LocNguyen. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
