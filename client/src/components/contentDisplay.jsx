import React from "react";
import { Link } from "react-router-dom";

const DisplayContent = ({ title, date, body }) => {
  return (
    <React.Fragment>
      <div className="content-container">
        <div className="content-back">
          <Link to="/">
            <img src={require("../images/icons/close.svg")} alt="Close" />
          </Link>
        </div>
        <div className="half-container">
          <img src={require("../images/activity.jpg")} alt="Activity Sample" />
        </div>
        <div className="half-container details">
          <h1>{title}</h1>
          <h2>{date}</h2>
          <p>{body}</p>
          <div className="share-icons">
            <img
              src={require("../images/icons/facebook.svg")}
              alt="Share on Facebook"
            />
            <img
              src={require("../images/icons/twitter.svg")}
              alt="Share on Twitter"
            />
            <img
              src={require("../images/icons/linkedin.svg")}
              alt="Share on LinkedIn"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DisplayContent;
