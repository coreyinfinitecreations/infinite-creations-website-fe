import React, { useState, useEffect } from "react";
import { cookieService } from "../../services";
import {
  showCookieNotification,
  initializeScripts,
} from "../../utils/cookieUtils";
import "./CookieSettings.css";

const CookieSettings = ({ isOpen, onClose }) => {
  const [preferences, setPreferences] = useState({
    essential: true, // Always enabled
    analytics: false,
    marketing: false,
    functional: true,
  });

  useEffect(() => {
    if (isOpen) {
      // Load current preferences
      const currentPreferences = cookieService.getGranularPreferences();
      setPreferences(currentPreferences);
    }
  }, [isOpen]);

  const handleToggle = (category) => {
    if (category === "essential" || category === "functional") {
      // Essential and functional cookies cannot be disabled
      return;
    }

    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSavePreferences = () => {
    // Save granular preferences
    cookieService.saveGranularPreferences(preferences);

    // Initialize scripts if needed
    if (preferences.analytics || preferences.marketing) {
      initializeScripts();
    }

    showCookieNotification("Cookie preferences saved successfully!", "success");
    onClose();
  };

  const handleAcceptAll = () => {
    setPreferences({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
    cookieService.acceptAllCookies();
    initializeScripts();
    showCookieNotification("All cookies accepted!", "success");
    onClose();
  };

  const handleRejectAll = () => {
    setPreferences({
      essential: true,
      analytics: false,
      marketing: false,
      functional: true,
    });
    cookieService.denyAllCookies();
    showCookieNotification("Only essential cookies are enabled.", "info");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="cookie-settings-overlay" onClick={onClose}>
      <div
        className="cookie-settings-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cookie-settings-header">
          <h2>Cookie Settings</h2>
          <button className="close-button" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="cookie-settings-content">
          <p className="cookie-settings-description">
            Manage your cookie preferences below. You can enable or disable
            different categories of cookies.
          </p>

          <div className="cookie-categories">
            <div className="cookie-category">
              <div className="cookie-category-header">
                <h3>Essential Cookies</h3>
                <div className="cookie-toggle">
                  <input
                    type="checkbox"
                    id="essential"
                    checked={preferences.essential}
                    disabled={true}
                  />
                  <label htmlFor="essential" className="toggle-label disabled">
                    <span className="toggle-switch"></span>
                  </label>
                </div>
              </div>
              <p className="cookie-category-description">
                These cookies are necessary for the website to function and
                cannot be disabled.
              </p>
            </div>

            <div className="cookie-category">
              <div className="cookie-category-header">
                <h3>Functional Cookies</h3>
                <div className="cookie-toggle">
                  <input
                    type="checkbox"
                    id="functional"
                    checked={preferences.functional}
                    disabled={true}
                  />
                  <label htmlFor="functional" className="toggle-label disabled">
                    <span className="toggle-switch"></span>
                  </label>
                </div>
              </div>
              <p className="cookie-category-description">
                These cookies enable enhanced functionality and personalization,
                such as remembering your preferences.
              </p>
            </div>

            <div className="cookie-category">
              <div className="cookie-category-header">
                <h3>Analytics Cookies</h3>
                <div className="cookie-toggle">
                  <input
                    type="checkbox"
                    id="analytics"
                    checked={preferences.analytics}
                    onChange={() => handleToggle("analytics")}
                  />
                  <label htmlFor="analytics" className="toggle-label">
                    <span className="toggle-switch"></span>
                  </label>
                </div>
              </div>
              <p className="cookie-category-description">
                These cookies help us understand how visitors interact with our
                website by collecting and reporting information.
              </p>
            </div>

            <div className="cookie-category">
              <div className="cookie-category-header">
                <h3>Marketing Cookies</h3>
                <div className="cookie-toggle">
                  <input
                    type="checkbox"
                    id="marketing"
                    checked={preferences.marketing}
                    onChange={() => handleToggle("marketing")}
                  />
                  <label htmlFor="marketing" className="toggle-label">
                    <span className="toggle-switch"></span>
                  </label>
                </div>
              </div>
              <p className="cookie-category-description">
                These cookies are used to track visitors across websites to
                display relevant advertisements.
              </p>
            </div>
          </div>
        </div>

        <div className="cookie-settings-actions">
          <button
            className="cookie-settings-btn btn-reject"
            onClick={handleRejectAll}
          >
            Reject All
          </button>
          <button
            className="cookie-settings-btn btn-save"
            onClick={handleSavePreferences}
          >
            Save Preferences
          </button>
          <button
            className="cookie-settings-btn btn-accept"
            onClick={handleAcceptAll}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettings;
