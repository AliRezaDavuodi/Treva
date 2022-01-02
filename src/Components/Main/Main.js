import React from "react";
import Hire from "../Hire/Hire";
import SubscribeUs from "../SubscribeUs/SubscribeUs";
import Work from "../Work/Work";

import "./Main.scss";

const Main = () => {
  return (
    <main role="main" className="main">
      <Hire />
      <Work />
      <SubscribeUs />
    </main>
  );
};

export default Main;
