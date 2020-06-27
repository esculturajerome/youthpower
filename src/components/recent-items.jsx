import React from "react";

const RecentItems = () => {
  return (
    <div className="recent-item">
      <div className="recent-img-container">
        <img src={require("../images/activity.jpg")} alt="Activity Sample" />
      </div>
      <div className="recent-details-container">
        <h3>December 29, 2019</h3>
        <p>
          Hoarded more than 20 books for YP members. It's 11 weeks remaining to
          meet the Twenty-book challenge for the 13th reading season. Double
          time participants, if you're aiming for gold. Happy reading!!
        </p>
        <div className="primary-btn read-more">Read More</div>
      </div>
    </div>
  );
};

export default RecentItems;
