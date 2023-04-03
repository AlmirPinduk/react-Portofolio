import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="http://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="http://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
