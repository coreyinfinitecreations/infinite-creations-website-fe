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
            <span className="about-badge">Your partner for digital growth and automation</span>
            <h2 className="about-title">
              Running a business is hard enough. Your technology shouldn't make it harder.
            </h2>
            <p className="about-description">
              Missed inquiries, manual tasks, disconnected tools, and an outdated website can cost you valuable time and opportunities. We listen first, then bring together websites, marketing, automation, and custom systems to help you focus on your customers.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">⚙️</div>
                <span>Attract customers with a stronger online presence.</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📈</div>
                <span>Automate follow-ups and time-consuming tasks.</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <span>
                  Connect the tools you rely on as you grow.
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
