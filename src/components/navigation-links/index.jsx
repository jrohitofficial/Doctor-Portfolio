import React, { useState } from "react";
import classes from "./navigation-links.module.css";
import Button from "../button";

const NavigationLinks = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={classes["nav-links-container"]}>
      <ul className={classes["nav-links-parent"]}>
        <li className={classes["nav-link-item"]}>
          <a
            href="/"
            onClick={() => handleActiveLink("Home")}
            className={`${classes["nav-link"]} ${
              activeLink === "Home" ? classes["active-link"] : ""
            }`}
          >
            Home
          </a>
        </li>
        <li className={classes["nav-link-item"]}>
          <a
            href="#about"
            onClick={() => handleActiveLink("About")}
            className={`${classes["nav-link"]} ${
              activeLink === "About" ? classes["active-link"] : ""
            }`}
          >
            About
          </a>
        </li>
        <li className={classes["nav-link-item"]}>
          <a
            href="#cv"
            onClick={() => handleActiveLink("CV")}
            className={`${classes["nav-link"]} ${
              activeLink === "CV" ? classes["active-link"] : ""
            }`}
          >
            CV
          </a>
        </li>
        <li className={classes["nav-link-item"]}>
          <a
            href="#education"
            onClick={() => handleActiveLink("Education")}
            className={`${classes["nav-link"]} ${
              activeLink === "Education" ? classes["active-link"] : ""
            }`}
          >
            Education
          </a>
        </li>
        <li className={classes["nav-link-item"]}>
          <a
            href="#testimonial"
            onClick={() => handleActiveLink("Testimonial")}
            className={`${classes["nav-link"]} ${
              activeLink === "Testimonial" ? classes["active-link"] : ""
            }`}
          >
            Testimonial
          </a>
        </li>
        <li className={classes["nav-link-item"]}>
          <a
            href="#article"
            onClick={() => handleActiveLink("Article")}
            className={`${classes["nav-link"]} ${
              activeLink === "Article" ? classes["active-link"] : ""
            }`}
          >
            Article
          </a>
        </li>
      </ul>

      <div className={classes["divider"]}></div>

      <Button className={classes["contact-btn"]}>Contact</Button>
    </div>
  );
};

export default NavigationLinks;
