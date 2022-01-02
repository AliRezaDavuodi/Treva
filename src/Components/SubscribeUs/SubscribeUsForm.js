import React from "react";

import "./SubscribeUsForm.scss";

const SubscribeUsForm = () => {
  return (
    <div className="subscribe__from">
      <form className="form">
        <div className="from__controll">
          <input type="text" />
          <button> Subscribe &nbsp; &rarr; </button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeUsForm;
