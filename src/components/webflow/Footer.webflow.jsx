import React from "react";
import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";

const Footer = ({
  companyName = "Infinite Creations",
  tagline = "Transforming ideas into digital reality",
  email = "hello@infinitecreations.io",
  phone = "(555) 123-4567",
  copyrightYear = "2026",
}) => {
  const footerStyle = {
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "60px 20px 30px",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    marginBottom: "40px",
  };

  const brandStyle = {
    marginBottom: "16px",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: "12px",
  };

  const taglineStyle = {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.7)",
    lineHeight: "1.6",
  };

  const sectionTitleStyle = {
    fontSize: "16px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "16px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const linkStyle = {
    display: "block",
    color: "rgba(255, 255, 255, 0.7)",
    textDecoration: "none",
    marginBottom: "8px",
    fontSize: "14px",
    transition: "color 0.3s ease",
  };

  const contactInfoStyle = {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "14px",
    marginBottom: "8px",
  };

  const dividerStyle = {
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    paddingTop: "20px",
    textAlign: "center",
  };

  const copyrightStyle = {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.5)",
  };

  const accentStyle = {
    color: "#FF4444",
  };

  return (
    <footer className="footer" style={footerStyle}>
      <div className="footer-container" style={containerStyle}>
        <div className="footer-grid" style={gridStyle}>
          <div className="footer-brand" style={brandStyle}>
            <div style={logoStyle}>
              <span style={accentStyle}>∞</span> {companyName}
            </div>
            <p style={taglineStyle}>{tagline}</p>
          </div>

          <div className="footer-links">
            <h4 style={sectionTitleStyle}>Quick Links</h4>
            <a href="#home" style={linkStyle}>
              Home
            </a>
            <a href="#services" style={linkStyle}>
              Services
            </a>
            <a href="#portfolio" style={linkStyle}>
              Portfolio
            </a>
            <a href="#about" style={linkStyle}>
              About Us
            </a>
            <a href="#contact" style={linkStyle}>
              Contact
            </a>
          </div>

          <div className="footer-services">
            <h4 style={sectionTitleStyle}>Services</h4>
            <a href="#web-design" style={linkStyle}>
              Web Design
            </a>
            <a href="#development" style={linkStyle}>
              Web Development
            </a>
            <a href="#software" style={linkStyle}>
              Software Solutions
            </a>
            <a href="#consulting" style={linkStyle}>
              Consulting
            </a>
          </div>

          <div className="footer-contact">
            <h4 style={sectionTitleStyle}>Contact Us</h4>
            <p style={contactInfoStyle}>📧 {email}</p>
            <p style={contactInfoStyle}>📞 {phone}</p>
          </div>
        </div>

        <div className="footer-bottom" style={dividerStyle}>
          <p style={copyrightStyle}>
            © {copyrightYear} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterComponent = declareComponent(Footer, {
  name: "Footer",
  description: "Footer component for Infinite Creations website",
  props: {
    companyName: props.Text({
      name: "Company Name",
      defaultValue: "Infinite Creations",
    }),
    tagline: props.Text({
      name: "Tagline",
      defaultValue: "Transforming ideas into digital reality",
    }),
    email: props.Text({
      name: "Email",
      defaultValue: "hello@infinitecreations.io",
    }),
    phone: props.Text({ name: "Phone", defaultValue: "(555) 123-4567" }),
    copyrightYear: props.Text({ name: "Copyright Year", defaultValue: "2026" }),
  },
});

export default FooterComponent;
