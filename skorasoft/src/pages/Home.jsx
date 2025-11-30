import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import PartnershipCollaboration from "../components/PartnershipCollaboration";
import Menu from "../components/Menu";
import MarketingVideoIntro from "../components/MarketingVideoIntro";
import SpaceFooter from "../components/SpaceFooter";
import Chatbot from "../components/SendMessage";
const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Hero Section */}
      <HeroSection />
      <MarketingVideoIntro />
      <Content />

      <PartnershipCollaboration />

      <Menu />

      {/* Optional Header */}
      {/* <Header /> */}
      <SpaceFooter />
    </div>
  );
};

export default Home;
