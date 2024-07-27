import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { BiSolidQuoteAltRight } from "react-icons/bi";

import classes from "./success-story.module.css";

const SuccessStory = () => {
  return (
    <div className={`${classes["success-story"]} container`}>
      <div className={classes["story-content"]}>
        <div className="content-wrapper">
          <h2 className={classes["story-content-heading"]}>
            863+ Patients Success Stories
          </h2>
          <div className={classes["divider"]}></div>
          <p className={classes["story-content-desc"]}>
            Mauris porttitor eleifend odio, id venenatis orci ornare ac nullam
            id convallis nisl.
          </p>
        </div>

        <div className={classes["actions-button"]}>
          <div className={classes["button-wrapper"]}>
            <button>
              <GoArrowLeft />
            </button>
            <button>
              <GoArrowRight />
            </button>
          </div>

          <div className={classes["dots-wrapper"]}>
            <div className={classes["dot"]}></div>
            <div className={`${classes["dot"]} ${classes["dot-active"]}`}></div>
            <div className={classes["dot"]}></div>
            <div className={classes["dot"]}></div>
            <div className={classes["dot"]}></div>
          </div>
        </div>
      </div>

      <div className={classes["story-quote"]}>
        <BiSolidQuoteAltRight className={classes["quote"]} />

        <p className={classes["quote-text"]}>
          When a military doctor tracks down his former fiancee's kidnapped
          niece, he discovers a complex human trafficking ring in Goa. He then
          weaves an intricate trap to capture the perpetrators.
        </p>
      </div>
    </div>
  );
};

export default SuccessStory;
