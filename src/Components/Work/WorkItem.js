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
            <br />
            and make him read the rest of the advertisement. The headline should
            <br />
            be simply catchy and various key points should be embedded when
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
            <br />
            and make him read the rest of the advertisement. The headline should
            <br />
            be simply catchy and various key points should be embedded when
            <br />
            deciding on the headline for the ad. The headline should catch
            <br />
            attention of the eye at the first glance. Words in headlines should
            <br />
            act as tags for the advertisement. It should say it all about the
            <br />
            content
          </p>
        </div>
      </div>
    </>
  );
};

export default WorkItem;
