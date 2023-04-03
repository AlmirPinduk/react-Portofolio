import React from "react";
import ME from "../../assets/Almirr.png";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5>Hello I`m</h5>
          <h1>Almir <span className="span1">Pinduk</span></h1>
          <h5 className="text-light">Web Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="" />
          </div>

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
