import React from "react";
import "./Hero.css";

const Hero = () => {
  const handleGetStarted = () => {
    // Scroll to contact section or open contact form
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewPortfolio = () => {
    // Navigate to portfolio section or page
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Transform Your Digital Vision into Reality
          </h1>
          <p className="hero-subtitle">
            We create stunning websites and innovative software solutions that
            elevate your business. From concept to launch, we're your trusted
            partner in digital excellence.
          </p>
        </div>

        <div className="hero-actions">
          <button className="btn-cta-primary" onClick={handleGetStarted}>
            Get Started Today
          </button>
          <button className="btn-cta-secondary" onClick={handleViewPortfolio}>
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
