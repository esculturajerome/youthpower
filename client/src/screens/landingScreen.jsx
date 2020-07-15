import React from "react";
import { withRouter } from "react-router-dom";

import LandingPage from "../components/landingComponents/landingSection";
import Footer from "../components/footer";
import RecentActivities from "../components/landingComponents/recentActivitiesSection";
import LearnMore from "../components/landingComponents/learnMoreSection";
import DonationSection from "../components/landingComponents/donationSection";
import Nav from "../components/navigation";

const LandingScreen = () => {
  return (
    <React.Fragment>
      <Nav />
      <LandingPage />
      <RecentActivities />
      <DonationSection />
      <LearnMore />
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(LandingScreen);
