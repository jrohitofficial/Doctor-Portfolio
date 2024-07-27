import React from "react";
import { GoArrowRight } from "react-icons/go";

import classes from "./call-to-action.module.css";
import Button from "../button";

const CallToAction = () => {
  return (
    <div className={classes["call-to-action"]}>
      <div className={`${classes["call-to-action-container"]} container`}>
        <h1 className={classes["title"]}>
          Looking for a Pediatrics Doctor? Get in touch and let's chat!
        </h1>

        <div className={classes["content"]}>
          <p className={classes["content-desc"]}>
            Donec in bibendum risus. Cras eget imperdiet sapien. Donec
            sollicitudin maximus augue, non elementum quam ultrices non.
          </p>
          <Button>
            Get in touch <GoArrowRight size={"2.4rem"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
