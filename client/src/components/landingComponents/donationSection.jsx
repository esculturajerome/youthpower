import React from "react";
import styled from "styled-components";

import ButtonComponent from "../buttonComponent";

const DonationSection = () => {
  return (
    <DonationWrapper>
      <div className="donation-container" id="donation">
        <div className="donation-item">
          <img src={require("../../images/donation-icon.svg")} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <ButtonComponent title="Read More" className="left" />
        </div>
        <div className="donation-item">
          <img src={require("../../images/donation-icon.svg")} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <ButtonComponent title="Read More" className="left" />
        </div>
      </div>
    </DonationWrapper>
  );
};

const DonationWrapper = styled.div`
  .donation-container {
    margin: 0;
  }

  .donation-item {
    padding: 60px 20px;
  }

  .donation-item:last-child {
    padding-top: 0;
  }

  .donation-item img {
    width: 100px;
    margin-left: -15px;
  }

  .donation-item p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.28px;
  }

  .donation-item .primary-btn {
    padding-left: 0;
    margin-left: 0;
  }

  @media only screen and (min-width: 768px) {
    .donation-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 450px;
    }

    .donation-item {
      padding: 100px 80px;
      width: 50%;
    }

    .donation-item:last-child {
      padding-top: 100px;
      padding-right: 0;
    }

    .donation-item p {
      width: 80%;
    }
  }
`;

export default DonationSection;
