import React, { Component } from "react";

import ButtonComponent from "./buttonComponent";
import { Link } from "react-router-dom";

class RecentItems extends Component {
  truncate = (str) => {
    return str.length > 10 ? str.substring(0, 100) + "..." : str;
  };
  render() {
    const { postData } = this.props;
    const galleryArray = postData.gallery;
    return (
      <div className="recent-item">
        {postData.image && (
          <div className="recent-img-container">
            <Link
              to={{
                pathname: `/activity/${postData.id}`,
                state: {
                  id: `${postData.id}`,
                  image: `${postData.image}`,
                  title: `${postData.title}`,
                  date: `${postData.date}`,
                  body: `${postData.body}`,
                  gallery: { galleryArray },
                },
              }}
            >
              <img
                src={require("../images/" + postData.image)}
                alt={postData.title}
              />
            </Link>
          </div>
        )}
        <div className="recent-details-container">
          <h2>{postData.title}</h2>
          <h3>{postData.date}</h3>
          <p style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
            {this.truncate(postData.body)}
          </p>
          <Link
            to={{
              pathname: `/activity/${postData.id}`,
              state: {
                id: `${postData.id}`,
                image: `${postData.image}`,
                title: `${postData.title}`,
                date: `${postData.date}`,
                body: `${postData.body}`,
                gallery: { galleryArray },
              },
            }}
          >
            <ButtonComponent className="left" title="Read More" />
          </Link>
        </div>
      </div>
    );
  }
}

export default RecentItems;
