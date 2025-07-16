import React from "react";
import "./ComingSoon.css";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <div className="coming-soon-logo">
          <img
            src="/infinite-creations-logo.png"
            alt="Infinite Creations Logo"
            className="logo"
          />
        </div>

        <div className="coming-soon-text">
          <h1 className="coming-soon-title">Coming Soon</h1>
          <p className="coming-soon-subtitle">
            We're working hard to bring you something amazing!
          </p>
          <p className="coming-soon-description">
            This page is currently under development. Check back soon for
            updates, or return to our homepage to explore what we have to offer.
          </p>
        </div>

        <div className="coming-soon-actions">
          <button
            className="btn-home"
            onClick={() => (window.location.href = "/")}
          >
            Back to Home
          </button>
        </div>
      </div>

      <div className="coming-soon-animation">
        <div className="pulse-circle"></div>
        <div className="pulse-circle delay-1"></div>
        <div className="pulse-circle delay-2"></div>
      </div>
    </div>
  );
};

export default ComingSoon;
