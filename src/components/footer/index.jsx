import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

import classes from "./footer.module.css";

import Logo from "../logo";

const Footer = () => {
  return (
    <div className={classes["footer"]}>
      <div className={`${classes["footer-container"]} container`}>
        <Logo variant="light" />

        <div className={classes["location"]}>
          <h3 className={classes["heading"]}>Location</h3>

          <p>32 Kathmandu. Bagmati, Nepal</p>
        </div>
        <div className={classes["quick-links"]}>
          <h3 className={classes["heading"]}>Quick Links</h3>

          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#cv">CV</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#article">Article</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className={classes["follow-me"]}>
          <h3 className={classes["heading"]}>Follow Me</h3>

          <ul>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href="#">
                <FaMedium />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className={`${classes["footer-text"]} container`}>
      Copyright © 2023-2024 Dr.SKJHA. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
