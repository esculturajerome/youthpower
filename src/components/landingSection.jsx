import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-image">
        <img src={require("../images/intro.png")} alt="Youth Power" />
      </div>
      <div className="landing-details">
        <h3>Where every book lover is enjoined in the circle</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <button className="primary-btn">Donate a book</button>
      </div>
    </div>
  );
};

export default LandingPage;
