import React from "react";
import ButtonComponent from "../buttonComponent";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <LandingWrapper>
      <div className="landing-container" id="landing-container">
        <div className="landing-image">
          <img src={require("../../images/intro.png")} alt="Youth Power" />
        </div>
        <div className="landing-details">
          <h3>Where every book lover is enjoined in the circle</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <ButtonComponent className="left" title="Donate a book" />
        </div>
      </div>
    </LandingWrapper>
  );
};

const LandingWrapper = styled.div`
  .landing-container {
    margin: 35px 0;
  }

  .landing-image {
    margin: 100px 0;
  }

  .landing-container img {
    width: 300px;
    max-width: 350px;
    display: block;
    margin: 0 auto;
  }

  .landing-details {
    margin: 35px 0;
    padding: 0 20px;
  }

  .landing-container h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #273238;
  }

  .landing-container p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.28px;
    color: #42533f;
  }

  .landing-btn p {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.26px;
    color: #58b4ae;
    width: 100px;
    padding: 15px 15px 15px 0;
    cursor: pointer;
  }

  .landing-details button {
    min-width: 150px;
    text-align: left;
    padding-left: 0;
    margin-left: 0;
  }

  @media only screen and (min-width: 768px) {
    .landing-container {
      margin: 0;
      display: flex;
      align-items: center;
      min-height: 100vh;
      padding: 0 80px;
    }

    .landing-image {
      flex-basis: 50%;
    }

    .landing-details {
      flex-basis: 50%;
      max-width: 650px;
    }

    .landing-container img {
      width: 100%;
      margin: 0 auto;
    }
  }
`;

export default LandingPage;
