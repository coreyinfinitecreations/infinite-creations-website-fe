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
            <span className="about-badge">Technology that earns its keep</span>
            <h2 className="about-title">
              Connect the work. Automate the repeatable. Build what is missing.
            </h2>
            <p className="about-description">
              Infinite Creations helps growing businesses replace disconnected
              tools and manual handoffs with practical technology. We start with
              the operational problem, then design the right combination of
              automation, integrations, software, and digital foundations.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">⚙️</div>
                <span>Reduce repetitive work and costly process gaps.</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📈</div>
                <span>Give your team cleaner data and faster decisions.</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <span>
                  Create better experiences from first click through delivery.
                </span>
              </div>
            </div>

            <div className="about-actions">
              <button className="btn-learn-more" onClick={handleLearnMore}>
                See Our Work
              </button>
              <button className="btn-sign-up" onClick={handleSignUp}>
                Start a Conversation
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
