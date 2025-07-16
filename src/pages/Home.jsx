import React from "react";
import {
  Hero,
  Services,
  InteractiveDemo,
  TechStack,
  AboutSection,
} from "../components";
import { analyticsService } from "../services";

const Home = () => {
  // Track page view on component load
  React.useEffect(() => {
    analyticsService.trackPageView("home");
  }, []);

  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <TechStack />
      <InteractiveDemo />
    </>
  );
};

export default Home;
