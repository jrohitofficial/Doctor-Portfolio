import React from "react";
import classes from "./experience-card.module.css";

const ExperienceCard = ({ universityName, duration, degree, desc }) => {
  return (
    <div className={classes["education-card"]}>
      <div className={classes["ed-card-left"]}>
        <h5>{universityName}</h5>
        <p>{duration}</p>
      </div>

      <div className={classes["ed-card-content"]}>
        <h2>{degree}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
