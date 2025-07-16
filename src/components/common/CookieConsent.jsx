import React, { useState, useEffect } from "react";
import { cookieService } from "../../services";
import {
  showCookieNotification,
  initializeScripts,
} from "../../utils/cookieUtils";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    if (!cookieService.hasChoiceMade()) {
      // Show popup after a short delay
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    cookieService.acceptAllCookies();
    setIsVisible(false);

    // Initialize third-party scripts
    initializeScripts();

    // Show success notification
    showCookieNotification(
      "All cookies accepted. Analytics and marketing features enabled.",
      "success"
    );

    console.log("All cookies accepted - Analytics and marketing enabled");
  };

  const handleDeny = () => {
    cookieService.denyAllCookies();
    setIsVisible(false);

    // Show info notification
    showCookieNotification(
      "Cookies denied. Only essential cookies are enabled.",
      "info"
    );

    console.log("Cookies denied - Only essential cookies enabled");
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-popup">
        <div className="cookie-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="cookie-content">
          <h3 className="cookie-title">Cookie Consent</h3>
          <p className="cookie-description">
            We use cookies to enhance your browsing experience, serve
            personalized content, and analyze our traffic. By clicking "Accept
            All", you consent to our use of cookies. You can manage your
            preferences or learn more about our
            <a href="/coming-soon" className="cookie-link">
              {" "}
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="cookie-actions">
          <button className="cookie-btn cookie-btn-deny" onClick={handleDeny}>
            Deny
          </button>
          <button
            className="cookie-btn cookie-btn-accept"
            onClick={handleAccept}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
