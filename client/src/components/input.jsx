import React from "react";

import "../styles/inputStyle.css";

const Input = ({ name, type, autoFocus }) => {
  return (
    <React.Fragment>
      <input
        className="input-field"
        autoFocus={autoFocus}
        name={name}
        type={type}
      />
    </React.Fragment>
  );
};

export default Input;
