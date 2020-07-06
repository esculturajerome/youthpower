import React, { Component } from "react";
import styled from "styled-components";

import ButtonComponent from "./buttonComponent";

class Footer extends Component {
  handleLink = (e) => {
    console.log(e.currentTarget);

    switch (e) {
      case "mobile":
        return window.open("tel:09214222201", "_blank");
      case "email":
        return window.open("mailto:sample@gmail.com", "_blank");
      case "map":
        return window.open("https://goo.gl/maps/fEH4vHitPht3rsqZ8/", "_blank");
      default:
        return window.open(
          "https://www.facebook.com/knhsyouthpower/",
          "_blank"
        );
    }
  };
  render() {
    return (
      <FooterWrapper>
        <div className="footer-container">
          {/* <div>
            <ButtonComponent title="Join us" className="left black" />
          </div>
          <div>
            <ButtonComponent title="Donate to us" className="left black" />
          </div> */}
          <hr />
          <div className="social-media-icons">
            <button onClick={(e) => this.handleLink(e)}>
              <img
                src={require("../images/facebook.svg")}
                alt="Facebook"
                className="icon-btn left"
              />
            </button>
          </div>
          <div className="contact-details">
            <ul>
              <li onClick={(e) => this.handleLink("mobile")}>
                <ButtonComponent title="+639214222201" className="left black" />
              </li>

              <li onClick={(e) => this.handleLink("email")}>
                <ButtonComponent
                  title="youthpower@gmail.com"
                  className="left black"
                />
              </li>

              <li onClick={(e) => this.handleLink("map")}>
                <ButtonComponent
                  title="Phase 10B, Package 6, Barangay 176, Caloocan City North, Metro Manila, Philippines"
                  className="left black"
                />
              </li>
            </ul>
          </div>
        </div>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.div`
  .footer-container {
    background: #fff;
    margin: 0;
    padding: 30px 20px;
  }

  .social-media-icons {
    margin: 10px 0;
  }

  .contact-details .primary-btn {
    margin: 5px 0 !important;
    padding: 0 !important;
    font-size: 12px !important;
  }

  .contact-details div:last-child {
    margin-top: 30px !important;
  }

  @media only screen and (min-width: 768px) {
    .footer-container {
      padding: 80px 80px 30px 80px;
    }
  }
`;

export default Footer;
