import React from "react";
import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";

const Hero = ({
  title = "Transform Your Digital Vision into Reality",
  subtitle = "We create stunning websites and innovative software solutions that elevate your business. From concept to launch, we're your trusted partner in digital excellence.",
  primaryButtonText = "Get Started Today",
  secondaryButtonText = "View Our Work",
  primaryButtonLink = "#get-started",
  secondaryButtonLink = "#portfolio",
}) => {
  const sectionStyle = {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    overflow: "hidden",
    padding: "40px 20px",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,20,20,0.95) 100%)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: "24px",
    lineHeight: "1.1",
  };

  const subtitleStyle = {
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "40px",
    lineHeight: "1.7",
    maxWidth: "700px",
    margin: "0 auto 40px",
  };

  const actionsStyle = {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const primaryButtonStyle = {
    backgroundColor: "#FF4444",
    color: "#ffffff",
    border: "none",
    padding: "16px 32px",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block",
  };

  const secondaryButtonStyle = {
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "2px solid #ffffff",
    padding: "14px 30px",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block",
  };

  return (
    <section className="hero" style={sectionStyle}>
      <div className="hero-overlay" style={overlayStyle}></div>
      <div className="hero-content" style={contentStyle}>
        <h1 className="hero-title" style={titleStyle}>
          {title}
        </h1>
        <p className="hero-subtitle" style={subtitleStyle}>
          {subtitle}
        </p>
        <div className="hero-actions" style={actionsStyle}>
          <a
            href={primaryButtonLink}
            className="btn-cta-primary"
            style={primaryButtonStyle}
          >
            {primaryButtonText}
          </a>
          <a
            href={secondaryButtonLink}
            className="btn-cta-secondary"
            style={secondaryButtonStyle}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
};

const HeroComponent = declareComponent(Hero, {
  name: "Hero",
  description: "Hero section for Infinite Creations landing pages",
  props: {
    title: props.Text({
      name: "Title",
      defaultValue: "Transform Your Digital Vision into Reality",
    }),
    subtitle: props.Text({
      name: "Subtitle",
      defaultValue:
        "We create stunning websites and innovative software solutions that elevate your business.",
    }),
    primaryButtonText: props.Text({
      name: "Primary Button Text",
      defaultValue: "Get Started Today",
    }),
    secondaryButtonText: props.Text({
      name: "Secondary Button Text",
      defaultValue: "View Our Work",
    }),
    primaryButtonLink: props.Text({
      name: "Primary Button Link",
      defaultValue: "#get-started",
    }),
    secondaryButtonLink: props.Text({
      name: "Secondary Button Link",
      defaultValue: "#portfolio",
    }),
  },
});

export default HeroComponent;
