import React from "react";
import classes from "./work-history-card.module.css";

const WorkHistoryCard = ({ isCurrent, img, time, title, desc }) => {
  return (
    <div className={classes["work-history-card"]}>
      <img src={img} alt="Working History" />
      <div className={classes["history-card-content"]}>
        <h4
          className={`${classes["history-card-time"]} ${
            isCurrent ? classes["current-time"] : ""
          }`}
        >
          {time}
        </h4>
        <h2 className={classes["history-card-title"]}>{title}</h2>
        <p className={classes["history-card-desc"]}>{desc}</p>
      </div>
    </div>
  );
};

export default WorkHistoryCard;
