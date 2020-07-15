import React from "react";
import Gallery from "./gallery";
import { Link } from "react-scroll";

const DisplayContent = ({
  image,
  title,
  date,
  body,
  history,
  gallery,
  isToggleOn,
  onClick,
  handleBack,
}) => {
  return (
    <>
      <div className="content-container" id="backTop">
        <div className="content-back">
          <img
            src={require("../images/icons/close.svg")}
            alt="Close"
            className="icon-btn"
            onClick={(e) => handleBack(e)}
          />
        </div>
        {image && (
          <div className="half-container img">
            <img
              src={require("../images/" + image)}
              className="cover-img"
              alt={title}
            />
            {gallery && (
              <li>
                {isToggleOn === false ? (
                  <Link
                    activeClass="active"
                    to="gallery"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <img
                      src={require("../images/icons/gallery.svg")}
                      className="icon-btn"
                      alt="view gallery"
                      onClick={onClick}
                    />
                  </Link>
                ) : (
                  <Link
                    activeClass="active"
                    to="backTop"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <img
                      src={require("../images/icons/backTop.svg")}
                      className="icon-btn"
                      alt="view gallery"
                      onClick={onClick}
                    />
                  </Link>
                )}
              </li>
            )}
          </div>
        )}
        <div className="half-container details">
          <h1>{title}</h1>
          <h2>{date}</h2>
          <p>{body}</p>
          <div className="share-icons">
            <img
              src={require("../images/icons/facebook.svg")}
              className="icon-btn"
              alt="Share on Facebook"
            />
            <img
              src={require("../images/icons/twitter.svg")}
              className="icon-btn"
              alt="Share on Twitter"
            />
            <img
              src={require("../images/icons/linkedin.svg")}
              className="icon-btn"
              alt="Share on LinkedIn"
            />
          </div>
        </div>
      </div>
      {gallery && (
        <div id="gallery">
          <Gallery galleryImages={gallery} />
        </div>
      )}
    </>
  );
};

export default DisplayContent;
