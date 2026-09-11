import React from "react";
import { Link } from "react-router-dom";
import "./Legal.css";

const Terms = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-updated">Last updated: September 2026</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-body">
            <p>
              By using infinitecreations.io, you agree to these terms. If you
              don't agree, please don't use the site.
            </p>

            <h2>Services</h2>
            <p>
              Infinite Creations provides web design, web development, mobile
              development, and digital marketing services. Specific project
              terms — scope, timeline, and pricing — are defined in individual
              proposals or agreements, which take precedence over these general
              terms.
            </p>

            <h2>Quotes and Proposals</h2>
            <p>
              Submitting a project inquiry through our site does not create a
              contract. A project begins only when both parties sign a written
              proposal or agreement.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              Content on this site — text, images, logos, and design — belongs
              to Infinite Creations and may not be copied or reused without
              permission. Upon full payment, clients receive the rights to
              deliverables as specified in their project agreement.
            </p>

            <h2>Acceptable Use</h2>
            <p>
              You agree not to misuse this site, attempt to disrupt its
              operation, or submit false or misleading information through our
              forms.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              This site is provided "as is" without warranties of any kind. To
              the maximum extent permitted by law, Infinite Creations is not
              liable for damages arising from your use of the site.
            </p>

            <h2>Changes</h2>
            <p>
              We may update these terms from time to time. Continued use of the
              site after changes means you accept the updated terms.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms? Email us at{" "}
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

export default Terms;
