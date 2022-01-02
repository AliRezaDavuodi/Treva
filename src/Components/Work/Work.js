import React from "react";

import WorkTitle from "./WorkTitle";

import "./Work.scss";
import WorkItem from "./WorkItem";

const Work = () => {
  return (
    <div className="work">
      <WorkTitle />
      <WorkItem />
    </div>
  );
};

export default Work;
