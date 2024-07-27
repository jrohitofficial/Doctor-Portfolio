import React from "react";
import classes from "./navigation-bar.module.css";

import Logo from "../logo";
import NavigationLinks from "../navigation-links";

const NavigationBar = () => {
  return (
    <div className={classes["navigation-container"]}>
      <div className={`${classes["navigation-bar"]} container`}>
        <Logo />
        <NavigationLinks />
      </div>
    </div>
  );
};

export default NavigationBar;
