import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { CookieSettings } from "../index";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const handleCookieSettingsClick = (e) => {
    e.preventDefault();
    setIsCookieSettingsOpen(true);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-newsletter">
            <div className="footer-logo">
              <img
                src="/infinite-creations-logo.png"
                alt="Infinite Creations Logo"
                className="footer-logo-image"
              />
            </div>
            <p className="newsletter-description">
              Practical ideas for using automation, connected systems, and
              digital tools to run a stronger business.
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Join
              </button>
            </form>
            <p className="newsletter-disclaimer">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/portfolio">Our Work</Link>
                </li>
                <li>
                  <a href="/#services">Our Services</a>
                </li>
                <li>
                  <Link to="/get-started">Get Started</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Get in Touch</h4>
              <ul>
                <li>
                  <Link to="/get-started">Contact Us</Link>
                </li>
                <li>
                  <a href="mailto:hello@infinitecreations.io">
                    hello@infinitecreations.io
                  </a>
                </li>
                <li>
                  <Link to="/client/login">Client Login</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Stay Connected</h4>
              <div className="social-links">
                <SocialIcon
                  url="https://facebook.com/infinitecreationsagency"
                  bgColor="#000000"
                  style={{ height: 40, width: 40 }}
                />
                <SocialIcon
                  url="https://instagram.com/infinitecreations"
                  bgColor="#000000"
                  style={{ height: 40, width: 40 }}
                />
                <SocialIcon
                  url="https://linkedin.com/company/infinitecreations"
                  bgColor="#000000"
                  style={{ height: 40, width: 40 }}
                />
                <SocialIcon
                  url="https://youtube.com/infinitecreations"
                  bgColor="#000000"
                  style={{ height: 40, width: 40 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Infinite Creations. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link
              onClick={handleCookieSettingsClick}
              className="cookie-settings-link"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>

      <CookieSettings
        isOpen={isCookieSettingsOpen}
        onClose={() => setIsCookieSettingsOpen(false)}
      />
    </footer>
  );
};

export default Footer;
