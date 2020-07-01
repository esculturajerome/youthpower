import React, { Component } from "react";

import ButtonComponent from "./buttonComponent";
import { Link } from "react-router-dom";

class RecentItems extends Component {
  truncate = (str) => {
    return str.length > 10 ? str.substring(0, 150) + "..." : str;
  };
  render() {
    const { postData } = this.props;
    return (
      <div className="recent-item">
        <div className="recent-img-container">
          <img src={require("../images/activity.jpg")} alt="Activity Sample" />
        </div>
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
                title: `${postData.title}`,
                date: `${postData.date}`,
                body: `${postData.body}`,
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
