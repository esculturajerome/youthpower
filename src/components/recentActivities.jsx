import React from "react";
import RecentItems from "./recent-items";

const RecentActivities = () => {
  return (
    <React.Fragment>
      <div className="recent-container">
        <h2>Recent Activities</h2>
        <p className="primary-btn">View All</p>
      </div>
      <div className="recent-item-container">
        <RecentItems />
        <RecentItems />
        <RecentItems />
        <RecentItems />
      </div>
    </React.Fragment>
  );
};

export default RecentActivities;
