import React from "react";
import { BsInstagram } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Almir <span className="span2">Pinduk</span>
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portofolio">Portofolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <CiFacebook />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
        <a href="https://twitter.com">
          <FiTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Almir Pinduk. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
