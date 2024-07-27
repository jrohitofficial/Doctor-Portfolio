import React, { useEffect, useState } from "react";
import classes from "./testimonial.module.css";
import testimonial from "../../assets/images/testimonial.png";

import { quotes } from "../../data/quotes";

const Testimonial = () => {
  const [activeDot, setActiveDot] = useState(1);
  const [activeQuote, setActiveQuote] = useState({});

  useEffect(() => {
    setActiveQuote(quotes[activeDot]);
  }, [activeDot]);

  const handleDotClick = (i) => {
    setActiveDot(i);
  };

  return (
    <div className={classes["testimonial"]}>
      <div className={`${classes["testimonial-container"]} container`}>
        <div className={classes["testimonial-quote"]}>
          <p className={classes["quote-subtitle"]}>
            What my college says about me.
          </p>
          <h2 className={classes["quote-text"]}>“{activeQuote.quote}”</h2>

          <div className={classes["quote-author-dots"]}>
            <div className={classes["quote-author"]}>
              <p className={classes["author-name"]}>{activeQuote.name}</p>
              <p className={classes["author-passion"]}>{activeQuote.passion}</p>
            </div>

            <div className={classes["quote-dots"]}>
              {quotes.map((_, i) => (
                <div
                  onClick={() => handleDotClick(i)}
                  key={i}
                  className={`${classes["dot"]} ${
                    activeDot === i ? classes["dot-active"] : ""
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className={classes["testimonial-img-parent"]}>
          <img src={testimonial} alt="" className="testimonial-img" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
