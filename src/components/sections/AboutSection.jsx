import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <span className="about-badge">Innovate</span>
            <h2 className="about-title">
              Empowering Your Online Presence with Excellence
            </h2>
            <p className="about-description">
              At Infinite Creations, we specialize in crafting stunning websites
              that resonate with your audience. Our services extend to SEO and
              digital marketing, ensuring your message reaches the right people.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">✨</div>
                <span>Custom web design tailored to your unique vision.</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📈</div>
                <span>Boost your visibility with our expert SEO services.</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <span>
                  Engage your audience through effective digital marketing
                  strategies.
                </span>
              </div>
            </div>

            <div className="about-actions">
              <button className="btn-learn-more">Learn More</button>
              <button className="btn-sign-up">
                Sign Up
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
                alt="Person working on laptop in modern office"
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
