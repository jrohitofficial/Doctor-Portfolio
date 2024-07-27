import React from "react";
import classes from "./award-card.module.css";

const AwardCard = ({ img, count, title, desc }) => {
  return (
    <div className={classes["award-card"]}>
      <img src={img} alt="" />
      <h2>{count}</h2>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default AwardCard;
