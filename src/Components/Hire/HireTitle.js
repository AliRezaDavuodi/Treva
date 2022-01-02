import React from "react";

import postImg from "../../assets/post.svg";
import assignedImg from "../../assets/assign.svg";
import appliedImg from "../../assets/apply.svg";

import "./HireTitle.scss";

const HireTitle = () => {
  return (
    <>
      <h3 className="hire__title"> Hire </h3>
      <div className="hire__methods">
        <div className="hire__methods--item">
          <img src={postImg} alt="post method" />
          <span> Post </span>
        </div>
        <div className="hire__methods--item">
          <img src={appliedImg} alt="post method" />
          <span> Applied </span>
        </div>
        <div className="hire__methods--item">
          <img src={assignedImg} alt="post method" />
          <span> Assigned </span>
        </div>
      </div>
    </>
  );
};

export default HireTitle;
