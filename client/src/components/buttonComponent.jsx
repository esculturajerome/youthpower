import React from "react";
import styled from "styled-components";

const ButtonComponent = ({ title, className }) => {
  return (
    <BtnWrapper>
      <button className={`primary-btn ${className}`}>{title}</button>
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  .primary-btn {
    font-family: "Lato", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    color: #58b4ae;
    line-height: 20px;
    cursor: pointer;
    margin: 0 4px;
    padding: 10px;
    text-align: left;
    transition: all 0.1s ease-out;
    user-select: none;
  }

  .primary-btn.black {
    color: #273238;
  }

  .primary-btn.left {
    padding-left: 0;
    margin-left: 0;
  }

  .primary-btn.right {
    padding-right: 0;
    margin-right: 0;
  }

  .primary-btn:hover {
    font-weight: 900;
    font-size: 16px;
    transition: all 0.2s ease-out;
  }

  .primary-btn:visited {
    color: #273238;
  }

  .primary-btn:active {
    color: #273238;
  }

  .primary-btn:focus {
    outline: none;
  }
`;

export default ButtonComponent;
