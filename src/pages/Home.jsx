import React from "react";

import LatestEpisodes from "./Home/Latest";
import FooterPage from "../components/Footer/Footer";
import HealthcareServices from "./Home/Services";
import EpisodesGrid from "./Home/Event";
import SubscriptionForm from "./Home/Subscription";
import HeroSection from "../components/HeroSection";
const Home = () => {
  return (
    <div className="w-full h-screen bg-gray-50">
      <HeroSection />
      <EpisodesGrid />
      <LatestEpisodes />
      <HealthcareServices />
      <SubscriptionForm />
      <br />
      <div>
        <FooterPage />
      </div>
    </div>
  );
};

export default Home;
