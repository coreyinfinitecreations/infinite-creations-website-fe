import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutSection.css";

const AboutSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/portfolio");
  };

  const handleSignUp = () => {
    navigate("/get-started");
  };
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <span className="about-badge">Your digital systems and automation partner</span>
            <h2 className="about-title">
              Capture more opportunities. Simplify the work. Support your growth.
            </h2>
            <p className="about-description">
              Infinite Creations helps growing businesses turn everyday
              challenges into practical digital solutions. We start with your
              goals, then connect your website, customer follow-up, and business
              tools so your team can spend less time on manual work and more
              time serving customers.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">⚙️</div>
                <span>Reduce repetitive work and costly process gaps.</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📈</div>
                <span>Capture inquiries and make follow-up easier for your team.</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <span>
                  Connect your systems for a smoother customer experience.
                </span>
              </div>
            </div>

            <div className="about-actions">
              <button className="btn-learn-more" onClick={handleLearnMore}>
                See Our Work
              </button>
              <button className="btn-sign-up" onClick={handleSignUp}>
                Book a Free Strategy Call
                <svg
                  className="arrow-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaborating around connected business systems"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
