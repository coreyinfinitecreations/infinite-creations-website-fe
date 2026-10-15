import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/get-started");
  };

  const handleViewPortfolio = () => {
    navigate("/services");
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Grow Your Business. Simplify Everything Else.
          </h1>
          <p className="hero-subtitle">
            We help small and growing businesses attract customers, automate everyday tasks, and work more efficiently with websites, marketing, connected workflows, and smart digital solutions.
          </p>
        </div>

        <div className="hero-actions">
          <button className="btn-cta-primary" onClick={handleGetStarted}>
            Book a Free Strategy Call
          </button>
          <button className="btn-cta-secondary" onClick={handleViewPortfolio}>
            Explore Our Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
