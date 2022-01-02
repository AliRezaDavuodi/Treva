import React from "react";

import sendData from "../../assets/sendData.svg";
import walking from "../../assets/walking.svg";

import "./HireItem.scss";

const HireItem = () => {
  return (
    <>
      <div className="hire__item">
        <div className="hire__item--left bg-blue">
          <h3> The Amazing Hubble </h3>
          <p>
            Filium morte multavit si sine dubio praeclara sunt, explicabo nemo
            <br />
            enim ad minima. Probabo, inquit, modo ista sis aequitate, quam ob
            <br />
            rem aperiam eaque gaudere ut. t vero eos et caritatem, quae ab eo
            <br />
            ortum, tam crudelis fuisse, nihil. Et quidem rerum necessitatibus
            <br />
            saepe eveniet
          </p>
        </div>
        <div className="hire__item--right">
          <img src={sendData} alt="women is sending data" />
        </div>
      </div>

      <div className="hire__item">
        <div className="hire__item--right">
          <img src={walking} alt="women is sending data" />
        </div>
        <div className="hire__item--left bg-orange">
          <h3> The Amazing Hubble </h3>
          <p>
            Filium morte multavit si sine dubio praeclara sunt, explicabo nemo
            <br />
            enim ad minima. Probabo, inquit, modo ista sis aequitate, quam ob
            <br />
            rem aperiam eaque gaudere ut. t vero eos et caritatem, quae ab eo
            <br />
            ortum, tam crudelis fuisse, nihil. Et quidem rerum necessitatibus
          </p>
        </div>
      </div>
    </>
  );
};

export default HireItem;
