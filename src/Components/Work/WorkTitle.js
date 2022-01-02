import React from "react";

import assignedImg from "../../assets/assign.svg";
import appliedImg from "../../assets/apply.svg";
import jobImg from "../../assets/job.png";

import "./WorkTitle.scss";

const WorkTitle = () => {
  return (
    <>
      <h3 className="work__title"> Work </h3>
      <div className="work__methods">
        <div className="work__methods--item">
          <img src={jobImg} alt="post method" />
          <span> job </span>
        </div>
        <div className="work__methods--item">
          <img src={appliedImg} alt="post method" />
          <span> Applied </span>
        </div>
        <div className="work__methods--item">
          <img src={assignedImg} alt="post method" />
          <span> Assigned </span>
        </div>
      </div>
    </>
  );
};

export default WorkTitle;
