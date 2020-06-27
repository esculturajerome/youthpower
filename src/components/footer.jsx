import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <ul>
        <li>Join Us</li>
        <li>Donate to us</li>
      </ul>
      <hr></hr>
      <div className="social-media-icons">
        <a
          href="https://www.facebook.com/knhsyouthpower/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={require("../images/facebook.svg")} alt="Facebook" />
        </a>
      </div>
      <div className="contact-details">
        <a href="" rel="noopener noreferrer" target="_blank">
          +639214222201
        </a>
        <a href="" rel="noopener noreferrer" target="_blank">
          youthpower@gmail.com
        </a>
        <a
          href="https://goo.gl/maps/fEH4vHitPht3rsqZ8"
          rel="noopener noreferrer"
          target="_blank"
        >
          Phase 10B,Package 6, Barangay 176, Caloocan City North, Metro Manila,
          Philippines
        </a>
      </div>
    </div>
  );
};

export default Footer;
