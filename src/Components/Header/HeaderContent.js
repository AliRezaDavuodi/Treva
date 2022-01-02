import React from "react";
import Button from "../Button/Button";

import "./HeaderContent.scss";

const HeaderContent = () => {
  return (
    <>
      <div className="header__content">
        <h1 className="header__content--title"> Find Your Dream Job Here </h1>
        <p className="header__content--paragraph">
          Filium morte multavit si sine dubio praeclara sunt, explicabo nemo
          <br /> enim ad minima. Probabo, inquit, modo ista sis aequitate, quam
          ob <br /> rem aperiam eaque gaudere ut.
        </p>
      </div>
      <div className="header__actions">
        <Button className="btn btn__big"> Hire</Button>
        <Button className="btn btn__big"> work</Button>
      </div>
    </>
  );
};

export default HeaderContent;
