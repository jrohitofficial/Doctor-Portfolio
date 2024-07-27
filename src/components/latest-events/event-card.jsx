import React from "react";
import { CiCalendar } from "react-icons/ci";
import { LiaComment } from "react-icons/lia";

import classes from "./event-card.module.css";

const EventCard = ({ date, comments, title, desc }) => {
  return (
    <div className={classes["event-card"]}>
      <div className={classes["date-comments"]}>
        <div className={classes["date-wrapper"]}>
          <CiCalendar className={classes["icon"]} /> {date}
        </div>

        <div className={classes["comments-wrapper"]}>
          <LiaComment className={classes["icon"]} /> {comments} Comments
        </div>
      </div>

      <h3 className={classes["card-title"]}>{title}</h3>

      <p className={classes["card-desc"]}>{desc}</p>
    </div>
  );
};

export default EventCard;
