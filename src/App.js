import React from "react";
import Nav from "./components/navigation";

import LandingPage from "./components/landingSection";
import RecentActivities from "./components/recentActivities";
import DonationSection from "./components/donationSection;";

import "./App.css";
import LearnMore from "./components/learnMore";
import Footer from "./components/footer";

function App() {
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
}

export default App;
