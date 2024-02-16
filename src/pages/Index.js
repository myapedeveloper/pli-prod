import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import FeatureSection from "../components/FeatureSection";
import AboutArea from "../components/AboutArea";
import AboutAreaTab from "../components/AboutAreaTab";
import Faq from "../components/Faq";
import Service from "../components/Service";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <BannerSection />
        <FeatureSection />
        <AboutArea />
        <AboutAreaTab />
        <Faq />
        <Service />
      </main>
      <Footer />
    </>
  );
};

export default Index;
