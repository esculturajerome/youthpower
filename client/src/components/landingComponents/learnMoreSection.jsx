import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ButtonComponent from "../buttonComponent";

class LearnMore extends Component {
  state = {
    id: null,
    image: null,
    title: null,
    date: null,
    body: null,
  };

  componentDidMount() {
    const aboutId = "1";
    const aboutImage = "learnmore.jpg";
    const aboutTitle = "Learn more about Youth Power";
    const aboutDate = "July 2, 2020";
    const aboutBody =
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea.";

    this.setState({
      id: aboutId,
      image: aboutImage,
      title: aboutTitle,
      date: aboutDate,
      body: aboutBody,
    });
  }

  truncate = (str) => {
    return str.length > 10 ? str.substring(0, 350) + "..." : str;
  };

  render() {
    const { id, image, title, date, body } = this.state;
    return (
      <LearnMoreWrapper>
        <div className="learn-container">
          {image && (
            <div className="learn-image">
              <img src={require("../../images/" + image)} alt={title} />
            </div>
          )}
          <div className="learn-details">
            <h1>{title}</h1>
            {body && (
              <p style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                {this.truncate(body)}
              </p>
            )}
            <Link
              to={{
                pathname: "/about",
                state: {
                  id: `${id}`,
                  image: `${image}`,
                  title: `${title}`,
                  date: `${date}`,
                  body: `${body}`,
                },
              }}
            >
              <ButtonComponent className="left" title="Learn More" />
            </Link>
          </div>
        </div>
      </LearnMoreWrapper>
    );
  }
}

const LearnMoreWrapper = styled.div`
  .learn-container {
    background: #fff;
    margin: 0;
  }

  .learn-image {
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center; /* vertical */
    justify-content: center; /* horizontal */
  }

  .learn-image img {
    min-width: 350px;
    width: 100%;
  }

  .learn-details {
    padding: 25px 20px;
  }

  .learn-details p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.28px;
    color: #42533f;
  }

  .learn-details .primary-btn {
    padding-left: 0;
    margin-left: 0;
  }
  @media only screen and (min-width: 768px) {
    .learn-container {
      display: flex;
      align-items: center;
      min-height: 450px;
    }

    .learn-details {
      flex-basis: 50%;
      padding-left: 80px;
    }
    .learn-image {
      flex-basis: 50%;
      min-height: 500px;
    }
    .learn-details p {
      max-width: 600px;
    }
  }
`;

export default LearnMore;
