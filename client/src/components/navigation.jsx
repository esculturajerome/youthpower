import React, { Component } from "react";
import { Link as LinkAchor } from "react-scroll";
import styled from "styled-components";

import ButtonComponent from "./buttonComponent";

class Nav extends Component {
  state = { onScroll: null };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let onScroll = "onScroll";
    if (window.scrollY === 0) {
      onScroll = null;
    }
    this.setState({ onScroll });
  };

  // handleClick = () => {
  //   this.setState({ onClick: !this.state.onClick });
  // };

  render() {
    const { onScroll } = this.state;
    return (
      <NavigationWrapper>
        <div className={`navbar ${onScroll}`}>
          <LinkAchor
            activeClass="active"
            to="landing-container"
            spy={true}
            smooth={true}
            duration={500}
          >
            <h1>Youth Power</h1>
          </LinkAchor>
          {/* <img
            src={require("../images/icons/menu.svg")}
            alt="Hamburger-menu"
            className="hamburger-menu"
            onClick={this.handleClick}
          /> */}
          <div className="navButtons">
            <LinkAchor
              activeClass="active"
              to="activities"
              spy={true}
              smooth={true}
              duration={500}
            >
              <ButtonComponent title="Activities" />
            </LinkAchor>
            <LinkAchor
              activeClass="active"
              to="donation"
              spy={true}
              smooth={true}
              duration={500}
            >
              <ButtonComponent title="Donate" />
            </LinkAchor>
          </div>
        </div>
      </NavigationWrapper>
    );
  }
}

const NavigationWrapper = styled.div`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    width: 100%;
    z-index: 3;
    animation-name: navBarAnimationLost;
    animation-duration: 0.2s;
    transition: background 0.3s, height 0.3s;
  }

  .navButtons {
    display: flex;
  }

  .navbar h1 {
    flex-basis: 200px;
    padding-left: 20px;
    cursor: pointer;
  }

  .navbar .hamburger-menu {
    padding-right: 20px;
  }

  .navButtons .primary-btn {
    padding-bottom: 0;
    padding-right: 0;
  }

  @media only screen and (min-width: 768px) {
    .navbar {
      position: fixed;
    }

    .navbar h1 {
      padding-left: 80px;
    }

    .navbar ul {
      padding-right: 80px;
    }

    .navButtons {
      padding-right: 80px;
    }

    .navbar.onScroll {
      position: fixed;
      background: #fff;
      height: 50px;
      animation-name: navBarAnimation;
      animation-duration: 0.3s;
      transition: background 0.3s, height 0.3s;
    }

    .navbar.onScroll h1 {
      font-size: 18px;
      transition: font-size 0.3s;
    }

    @keyframes navBarAnimation {
      from {
        font-size: 30px;
        background: none;
        height: auto;
      }
      to {
        font-size: 18px;
        background: #fff;
        height: 50px;
      }
    }

    @keyframes navBarAnimationLost {
      from {
        background: #fff;
        font-size: 18px;
        height: 50px;
      }
      to {
        background: none;
        font-size: 30px;
        height: auto;
      }
    }
  }
`;

export default Nav;
