import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import classes from "./work-history.module.css";
import WorkHistoryCard from "./work-history-card";

import work1 from "../../assets/images/work-1.png";
import work2 from "../../assets/images/work-2.png";
import work3 from "../../assets/images/work-3.png";

const WorkHistory = () => {
  return (
    <div className={`${classes["work-history"]} container`}>
      <div className={classes["work-his-heading-wrapper"]}>
        <h1 className={classes["history-heading"]}>My Working History</h1>
        <div className={classes["divider"]}></div>
        <p className={classes["history-desc"]}>
        Here is an overview of my key professional experiences and current roles, highlighting my career journey and expertise.
        </p>
      </div>

      <div className={classes["work-history-card-wrapper"]}>
        <WorkHistoryCard
          isCurrent={true}
          img={work1}
          time="CURRENTLY WORKING"
          title="Nepal Mediciti"
          desc="A Senior Registrar in the Department of Paediatric and Neonatology at Nepal Mediciti, who has expertise and dedication to pediatric care."
        />
        <WorkHistoryCard
          img={work2}
          time="Apr,2021 to Sept,2022"
          title="Birgunj Health Care Hospital Pvt. Ltd."
          desc="Consultant Pediatrician specializing in diagnosing and treating conditions, preventive care, and family education, with a focus on research and advancements."
        />
        <WorkHistoryCard
          img={work3}
          time="Nov,2013 to Dec,2014"
          title="Birgunj Health Care Hospital Pvt. Ltd."
          desc="Gained extensive experience in managing acute and critical conditions across the Emergency Department, ICU, NICU, and General Ward, including emergency procedures, advanced care, and patient education."
        />
      </div>

      <div className={classes["work-history-arrow-wrapper"]}>
        <button>
          <GoArrowLeft />
        </button>
        <button>
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default WorkHistory;
