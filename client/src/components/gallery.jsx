import React, { Component } from "react";
import styled from "styled-components";

class Gallery extends Component {
  render() {
    const { galleryImages } = this.props;
    return (
      <React.Fragment>
        <GalleryWrapper>
          <ul>
            {galleryImages.map((image, i) => (
              <React.Fragment>
                {image.imageLink && (
                  <li key={i}>
                    <img
                      src={require("../images/" + image.imageLink)}
                      alt="gallery"
                      loading="lazy"
                    />
                  </li>
                )}
                {image.videoLink && (
                  <li key={i}>
                    <video
                      src={require("../videos/" + image.videoLink)}
                      alt="gallery"
                      loading="lazy"
                      controls="controls"
                    />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </GalleryWrapper>
      </React.Fragment>
    );
  }
}

const GalleryWrapper = styled.div`
  // BASIC

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    height: 40vh;
    flex-grow: 1;
  }

  ul li:first-child img {
    border-radius: 0 50px 0 0;
  }

  li:last-child {
    flex-grow: 10;
  }

  img,
  video {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
    cursor: pointer;
  }

  // ADVANCED

  // Portrait

  @media (max-aspect-ratio: 1/1) {
    li {
      height: 30vh;
    }
  }

  // Short screens

  @media (max-height: 480px) {
    li {
      height: 80vh;
    }
  }

  // Smaller screens in portrait

  @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
    ul {
      flex-direction: row;
    }

    li {
      height: auto;
      width: 100%;
    }
    img,
    video {
      width: 100%;
      max-height: 75vh;
      min-width: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    ul li:first-child img {
      border-radius: 0;
    }
  }
`;

export default Gallery;
