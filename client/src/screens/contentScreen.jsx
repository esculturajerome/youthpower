import React, { Component } from "react";
import styled from "styled-components";

import DisplayContent from "../components/contentDisplay";

class ContentScreen extends Component {
  state = {
    id: null,
    image: null,
    title: null,
    date: null,
    body: null,
    gallery: [],
    isToggleOn: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const { id } = this.props.location.state;
    const { image } = this.props.location.state;
    const { title } = this.props.location.state;
    const { date } = this.props.location.state;
    const { body } = this.props.location.state;
    const { gallery } = this.props.location.state;

    this.setState({ id, image, title, date, body, gallery });

    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        this.setState({ isToggleOn: false });
      } else if (window.pageYOffset > 771) {
        this.setState({ isToggleOn: true });
      }
    };

    // this.setState((prevState) => ({
    //   gallery: [...prevState.gallery, gallery],
    // }));
  }

  handleView = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  };

  render() {
    const { id, image, title, date, body, gallery, isToggleOn } = this.state;
    const { history } = this.props;
    return (
      <ContentWrapper>
        <DisplayContent
          id={id}
          image={image}
          title={title}
          date={date}
          body={body}
          gallery={gallery && gallery.galleryArray}
          isToggleOn={isToggleOn}
          onClick={this.handleView}
          history={history}
        />
      </ContentWrapper>
    );
  }
}

const ContentWrapper = styled.div`
  .content-container {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  .content-container .half-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }

  .content-container .half-container.details {
    padding: 0 25px;
  }

  .content-container .half-container.img img {
    width: 100%;
  }

  .content-container .content-back img {
    position: fixed;
    width: 25px;
    right: 0;
    margin: 15px;
    padding: 10px;
    filter: invert(88%) sepia(89%) saturate(4%) hue-rotate(181deg)
      brightness(111%) contrast(97%) drop-shadow(3px 3px 8px #808080);
  }

  .content-container .half-container.img .cover-img {
    border-radius: 0 0 50px;
  }

  .content-container .share-icons img {
    margin-right: 25px;
  }

  .content-container .half-container.img .icon-btn {
    position: fixed;
    width: 25px;
    right: 25px;
    top: 60px;
    filter: invert(88%) sepia(89%) saturate(4%) hue-rotate(181deg)
      brightness(111%) contrast(97%) drop-shadow(3px 3px 8px #808080);
  }

  .content-container .share-icons {
    padding: 25px 0 50px;
    display: flex;
    justify-content: flex-start;
  }

  @media only screen and (min-width: 768px) {
    .content-container {
      min-height: 100vh;
      flex-direction: row;
    }

    .content-container .content-back img,
    .content-container .half-container.img .icon-btn {
      filter: none;
    }

    .content-container .half-container.img .cover-img {
      border-radius: 0 50px 50px;
    }
  }
`;

export default ContentScreen;
