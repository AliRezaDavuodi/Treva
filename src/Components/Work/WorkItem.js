import React from "react";

import transferDataImg from "../../assets/transferData.svg";
import mobileAppImg from "../../assets/mobileApp.svg";

import "./WorkItem.scss";

const WorkItem = () => {
  return (
    <>
      <div className="work__item">
        <div className="work__item--left bg-purpul">
          <h3> Ordering Contact Lens Online</h3>
          <p>
            There is no denying the fact that the success of an advertisement
            <br />
            lies mostly in the headline. The headline should attract the reader
          </p>
        </div>
        <div className="work__item--right">
          <img src={transferDataImg} alt="women is sending data" />
        </div>
      </div>

      <div className="work__item">
        <div className="work__item--right">
          <img src={mobileAppImg} alt="women is sending data" />
        </div>
        <div className="work__item--left bg-green">
          <h3> Ordering Contact Lens Online </h3>
          <p>
            There is no denying the fact that the success of an advertisement{" "}
            <br />
            lies mostly in the headline. The headline should attract the reader
          </p>
        </div>
      </div>
    </>
  );
};

export default WorkItem;
