import React from "react";
import LandingPage from "../components/landingComponents/landingSection";
import Footer from "../components/footer";
import RecentActivities from "../components/landingComponents/recentActivitiesSection";
import LearnMore from "../components/landingComponents/learnMoreSection";
import DonationSection from "../components/landingComponents/donationSection";
import Nav from "../components/navigation";

const LandingScreen = ({ onClick }) => {
  return (
    <React.Fragment>
      <Nav onClick={onClick} />
      <LandingPage />
      <RecentActivities />
      <DonationSection />
      <LearnMore />
      <Footer />
    </React.Fragment>
  );
};

export default LandingScreen;
