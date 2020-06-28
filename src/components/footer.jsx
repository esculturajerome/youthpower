import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <ul>
        <li className="primary-btn">Join Us</li>
        <li className="primary-btn">Donate to us</li>
      </ul>
      <hr></hr>
      <div className="social-media-icons">
        <button
          href="https://www.facebook.com/knhsyouthpower/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={require("../images/facebook.svg")} alt="Facebook" />
        </button>
      </div>
      <div className="contact-details">
        <button href="" rel="noopener noreferrer" target="_blank">
          +639214222201
        </button>
        <button href="" rel="noopener noreferrer" target="_blank">
          youthpower@gmail.com
        </button>
        <button
          href="https://goo.gl/maps/fEH4vHitPht3rsqZ8"
          rel="noopener noreferrer"
          target="_blank"
        >
          Phase 10B,Package 6, Barangay 176, Caloocan City North, Metro Manila,
          Philippines
        </button>
      </div>
    </div>
  );
};

export default Footer;
