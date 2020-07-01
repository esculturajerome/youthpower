import React from "react";
import "../styles/buttonStyle.css";

const ButtonComponent = ({ title, className }) => {
  return (
    <React.Fragment>
      <div className={`primary-btn ${className}`}>{title}</div>
    </React.Fragment>
  );
};

export default ButtonComponent;
