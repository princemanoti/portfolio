import React from "react";
import "./Footer.css";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  /* SOCIALS STATIC DATA */
  let socialDetails = [
    { icon: faFacebook, link: "https://www.facebook.com/princemanoti" },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/festus-langat-k-8b5329146/",
    },
    //   { icon: faGithub, link: '' },
    {
      icon: faInstagram,
      link: "https://www.instagram.com/prince_manoti/",
    },
  ];

  /* GET CURRENT YEAR */
  let currentYear = new Date().getFullYear();

  /* RENDER SOCIAL ICONS */
  const getSocials = () => {
    return socialDetails.map((social, index) => (
      <a
        rel="noopener noreferrer"
        key={index}
        href={social.link}
        target="_blank"
      >
        <FontAwesomeIcon className="social-icon" icon={social.icon} />
      </a>
    ));
  };

  return (
    <div className="main-footer-container">
      <div className="main-footer-content">
        <div className="main-footer-message">
          <span> All rights reserved © Festus Langat K {currentYear} </span>
        </div>
        <div className="main-footer-socials">{getSocials()}</div>
      </div>
    </div>
  );
};

export default Footer;
