import React from "react";

import "./Button.scss";

const Button = (props) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
