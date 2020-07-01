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
          onClick={() =>
            window.open("https://www.facebook.com/knhsyouthpower/", "_blank")
          }
        >
          <img src={require("../images/facebook.svg")} alt="Facebook" />
        </button>
      </div>
      <div className="contact-details">
        <button onClick={() => window.open("tel:09214222201", "_blank")}>
          +639214222201
        </button>
        <button
          onClick={() => window.open("mailto:sample@gmail.com", "_blank")}
        >
          youthpower@gmail.com
        </button>
        <button
          onClick={() =>
            window.open("https://goo.gl/maps/fEH4vHitPht3rsqZ8/", "_blank")
          }
        >
          Phase 10B,Package 6, Barangay 176, Caloocan City North, Metro Manila,
          Philippines
        </button>
      </div>
    </div>
  );
};

export default Footer;
