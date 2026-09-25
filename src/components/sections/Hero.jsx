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
            Make your business work smarter
          </h1>
          <p className="hero-subtitle">
            We build AI automations, connected systems, and custom software
            that remove busywork, improve customer experiences, and create
            room to grow.
          </p>
        </div>

        <div className="hero-actions">
          <button className="btn-cta-primary" onClick={handleGetStarted}>
            Talk Through Your Goals
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
