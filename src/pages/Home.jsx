import React from "react";
import { Hero, Services, AboutSection } from "../components";
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
    </>
  );
};

export default Home;
