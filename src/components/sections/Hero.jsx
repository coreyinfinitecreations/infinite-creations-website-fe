import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/get-started");
  };

  const handleViewPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Smarter Systems. Less Manual Work. More Business Growth.
          </h1>
          <p className="hero-subtitle">
            We help growing businesses capture more leads, automate repetitive
            tasks, and streamline operations through custom websites, AI
            automation, and integrated business systems.
          </p>
        </div>

        <div className="hero-actions">
          <button className="btn-cta-primary" onClick={handleGetStarted}>
            Book a Free Strategy Call
          </button>
          <button className="btn-cta-secondary" onClick={handleViewPortfolio}>
            See What We Build
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
