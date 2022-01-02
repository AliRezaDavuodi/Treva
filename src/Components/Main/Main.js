import React from "react";
import Hire from "../Hire/Hire";
import SubscribeUs from "../SubscribeUs/SubscribeUs";
import Work from "../Work/Work";

import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <Hire />
      <Work />
      <SubscribeUs />
    </div>
  );
};

export default Main;
