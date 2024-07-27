import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";

import classes from "./about.module.css";
import about from "../../assets/images/about.png";

import Button from "../button";

import logo1 from "../../assets/icons/featured-1.svg";
import logo2 from "../../assets/icons/featured-2.svg";
import logo3 from "../../assets/icons/featured-3.svg";

const About = () => {
  return (
    <div className={classes["about-container"]} id="about">
      <div className={`${classes["about"]} container`}>
        <div className={classes["about-content"]}>
          <div className={classes["about-img-parent"]}>
            <img src={about} alt="About" className={classes["about-img"]} />
          </div>

          <div className={classes["about-text-content"]}>
            <h2 className={classes["about-name"]}>Hello, I’m Dr. Saroj Kumar Jha.</h2>

            <p className={classes["about-desc"]}>
            Specialist in Paediatric and Neonatology with an MD in Pediatrics and an MBBS. Completed a Post Graduate Program in Paediatric Nutrition from Boston University. Member of NEPAS, NMC, and NMA, dedicated to high standards in pediatric and neonatal care.
            </p>

            <div className={classes["about-btn-wrapper"]}>
              <Button>
                Send Message <BsArrowRight />
              </Button>
              <Button variant="secondary">
                Download cv <FiDownload />
              </Button>
            </div>
          </div>
        </div>

        <div className={classes["featured-container"]}>
          <p className={classes["featured-heading"]}>Featured by:</p>

          <div className={classes["logo-wrapper"]}>
            <img src={logo1} className={classes["logo"]} />
            <img src={logo2} className={classes["logo"]} />
            <img src={logo3} className={classes["logo"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
