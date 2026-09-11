import React from "react";
import { Link } from "react-router-dom";
import "./Legal.css";

const Privacy = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last updated: September 2026</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-body">
            <p>
              Infinite Creations ("we", "us", "our") respects your privacy.
              This policy explains what information we collect through
              infinitecreations.io and how we use it.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>
                <strong>Contact information</strong> you provide through our
                forms — such as your name, email address, company, phone
                number, and project details.
              </li>
              <li>
                <strong>Usage data</strong> — pages visited, time on site, and
                device information, collected via analytics tools to help us
                improve the site.
              </li>
              <li>
                <strong>Cookies</strong> — we use cookies for site
                functionality, analytics, and remembering your cookie
                preferences. You can manage these anytime via Cookie Settings
                in the footer.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To respond to your inquiries and provide quotes or proposals.</li>
              <li>To improve our website, services, and marketing.</li>
              <li>To send occasional updates if you've subscribed to our newsletter (you can unsubscribe anytime).</li>
            </ul>

            <h2>Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We share it only with
              service providers needed to operate the site (such as form
              processing and analytics), and only as much as necessary.
            </p>

            <h2>Data Retention</h2>
            <p>
              We keep inquiry and contact data only as long as needed for the
              purposes above, or as required by law.
            </p>

            <h2>Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal data at any time by emailing{" "}
              <a href="mailto:hello@infinitecreations.io">
                hello@infinitecreations.io
              </a>
              .
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy? Email us at{" "}
              <a href="mailto:hello@infinitecreations.io">
                hello@infinitecreations.io
              </a>
              .
            </p>

            <p className="legal-back">
              <Link to="/">← Back to Home</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
