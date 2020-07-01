import React from "react";
import ButtonComponent from "../buttonComponent";

const DonationSection = () => {
  return (
    <div className="donation-container">
      <div className="donation-item">
        <img src={require("../../images/donation-icon.svg")} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
        <div className="primary-btn">Read More</div>
      </div>
      <div className="donation-item">
        <img src={require("../../images/donation-icon.svg")} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
        <ButtonComponent title="Read More" />
      </div>
    </div>
  );
};

export default DonationSection;
