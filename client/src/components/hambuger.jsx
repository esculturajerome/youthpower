import React from "react";
import styled from "styled-components";
import { Link as LinkAchor } from "react-scroll";

const HamburgerMenu = ({ onClick, handleClick }) => {
  return (
    <HambugerWrapper>
      <div className={`hamburger-container ${onClick}`}>
        <div className="banner">
          <h1>Youth Power</h1>
          <img
            src={require("../images/icons/close.svg")}
            alt=""
            onClick={handleClick}
          />
        </div>
        <div className="navButtons">
          <LinkAchor
            activeClass="active"
            to="activities"
            spy={true}
            smooth={true}
            duration={500}
          >
            <p>Activities</p>
          </LinkAchor>
          <LinkAchor
            activeClass="active"
            to="donation"
            spy={true}
            smooth={true}
            duration={500}
          >
            <p>Donate</p>
          </LinkAchor>
        </div>
      </div>
    </HambugerWrapper>
  );
};

const HambugerWrapper = styled.div`
  .hamburger-container {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: #fff;
    min-height: 100vh;
    min-width: 100vw;
    top: 0;
    z-index: 5;
  }

  .hamburger-container.false {
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
  }

  .hamburger-container.true {
    transform: translateX(0%);
    transition: transform 0.3s ease-out;
  }

  .hamburger-container div {
    width: 100%;
  }

  .hamburger-container ul {
    width: 85%;
    padding-left: 25px;
    flex-grow: 1;
  }

  .hamburger-container .banner {
    margin: 0;
    background: #58b4ae;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }

  .banner h1,
  .banner img {
    padding: 0 20px;
    color: #fff;
  }

  .hamburger-container .navButtons {
    margin-top: 50px;
  }
  .hamburger-container .navButtons div {
    padding: 25px 0;
    border-bottom: 0.5px solid #273238;
  }
`;

export default HamburgerMenu;
