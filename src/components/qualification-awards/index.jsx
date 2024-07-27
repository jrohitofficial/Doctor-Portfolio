import React from "react";
import classes from "./qualification-awards.module.css";
import ExperienceCard from "./experience-card";
import AwardCard from "./award-card";

import award1 from "../../assets/images/award-1.svg";
import award2 from "../../assets/images/award-2.svg";
import award3 from "../../assets/images/award-3.svg";

const QualificationAwards = () => {
  return (
    <div
      className={`${classes["qualification-awards"]} container`}
      id="education"
    >
      <div className={classes["qualification-heading-wrapper"]}>
        <h1 className={classes["qualification-heading"]}>
          My Qualification & Awards
        </h1>
        <div className={classes["divider-heading"]}></div>
        <p className={classes["qualification-desc"]}>
        An overview of my academic achievements and recognitions, reflecting my dedication to professional excellence.
        </p>
      </div>

      <div className={classes["qualification-content"]}>
        <div className={classes["education-wrapper"]}>
          <ExperienceCard
            universityName="Oxford University"
            duration="Jan, 2016 to Jan, 2021"
            degree="Bachelor of Medicine & Bachelor of Surgery (MBBS)"
            desc="Donec ut imperdiet augue, ac rhoncus arcu. In ac mauris commodo, ultrices felis vitae, tempor eros."
          />
          <div className={classes["divider"]}></div>
          <ExperienceCard
            universityName="Boston University (BU)"
            duration="2023 AD"
            degree="PGNP"
            desc="Integer vel nulla condimentum, tempor risus eu, blandit urna. Quisque fringilla ex in urna pretium."
          />
          <div className={classes["divider"]}></div>
          <ExperienceCard
            universityName="Tribhuvan University (TU)"
            duration="2020 AD"
            degree="MD Pediatrics"
            desc="Proin varius diam vitae neque ornare ullamcorper."
          />
          <div className={classes["divider"]}></div>
          <ExperienceCard
            universityName="Kathmandu University, KU"
            duration="2013AD"
            degree="Bachelor of Medicine & Bachelor of Surgery (MBBS)"
            desc="Proin varius diam vitae neque ornare ullamcorper. Maecenas vehicula sem eu dui molestie aliquam."
          />
        </div>

        <div className={classes["award-card-wrapper"]}>
          <div className={classes["award-card-column"]}>
            <AwardCard
              img={award1}
              count="01"
              title="Global Peace Festival South Asia-2010"
              desc="Donec ut imperdiet augue, ac rhoncus arcu. In ac mauris commodo."
            />
            <AwardCard
              img={award3}
              count="03"
              title="XXth Nepalese Congress of Pediatrics NEPCON 2023 - Speaker"
              desc="Donec ut imperdiet augue, ac rhoncus arcu. In ac mauris commodo."
            />
          </div>
          <AwardCard
            img={award2}
            count="02"
            title="John Howland Award"
            desc="Donec ut imperdiet augue, ac rhoncus arcu. In ac mauris commodo."
          />
        </div>
      </div>
    </div>
  );
};

export default QualificationAwards;
