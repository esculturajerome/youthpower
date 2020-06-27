import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <img
        src={require("../images/intro.jpg")}
        alt="Youth Power Landing Image"
      />
      <div className="landing-details">
        <h3>Where every book lover is enjoined in the circle</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
      <div className="landing-btn">
        <p>Donate a Book</p>
      </div>
    </div>
  );
};

export default LandingPage;
