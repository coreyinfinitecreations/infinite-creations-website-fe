import React from "react";
import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";

const AboutSection = ({
  title = "About Infinite Creations",
  description = "We are a passionate team of developers and designers dedicated to creating exceptional digital experiences. Our mission is to transform your ideas into powerful, beautiful, and functional solutions.",
  stat1Value = "100+",
  stat1Label = "Projects Completed",
  stat2Value = "50+",
  stat2Label = "Happy Clients",
  stat3Value = "5+",
  stat3Label = "Years Experience",
}) => {
  const sectionStyle = {
    padding: "100px 20px",
    backgroundColor: "#ffffff",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: "800",
    color: "#000000",
    marginBottom: "24px",
  };

  const descriptionStyle = {
    fontSize: "18px",
    color: "#666666",
    lineHeight: "1.8",
    maxWidth: "800px",
    margin: "0 auto 60px",
  };

  const statsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "40px",
    marginTop: "40px",
  };

  const statStyle = {
    textAlign: "center",
  };

  const statValueStyle = {
    fontSize: "48px",
    fontWeight: "800",
    color: "#FF4444",
    marginBottom: "8px",
    display: "block",
  };

  const statLabelStyle = {
    fontSize: "16px",
    color: "#666666",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  return (
    <section className="about-section" style={sectionStyle}>
      <div className="about-container" style={containerStyle}>
        <h2 className="about-title" style={titleStyle}>
          {title}
        </h2>
        <p className="about-description" style={descriptionStyle}>
          {description}
        </p>
        <div className="stats-grid" style={statsGridStyle}>
          <div className="stat" style={statStyle}>
            <span className="stat-value" style={statValueStyle}>
              {stat1Value}
            </span>
            <span className="stat-label" style={statLabelStyle}>
              {stat1Label}
            </span>
          </div>
          <div className="stat" style={statStyle}>
            <span className="stat-value" style={statValueStyle}>
              {stat2Value}
            </span>
            <span className="stat-label" style={statLabelStyle}>
              {stat2Label}
            </span>
          </div>
          <div className="stat" style={statStyle}>
            <span className="stat-value" style={statValueStyle}>
              {stat3Value}
            </span>
            <span className="stat-label" style={statLabelStyle}>
              {stat3Label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSectionComponent = declareComponent(AboutSection, {
  name: "AboutSection",
  description: "About section with company info and statistics",
  props: {
    title: props.Text({
      name: "Section Title",
      defaultValue: "About Infinite Creations",
    }),
    description: props.Text({
      name: "Description",
      defaultValue:
        "We are a passionate team of developers and designers dedicated to creating exceptional digital experiences.",
    }),
    stat1Value: props.Text({ name: "Stat 1 Value", defaultValue: "100+" }),
    stat1Label: props.Text({
      name: "Stat 1 Label",
      defaultValue: "Projects Completed",
    }),
    stat2Value: props.Text({ name: "Stat 2 Value", defaultValue: "50+" }),
    stat2Label: props.Text({
      name: "Stat 2 Label",
      defaultValue: "Happy Clients",
    }),
    stat3Value: props.Text({ name: "Stat 3 Value", defaultValue: "5+" }),
    stat3Label: props.Text({
      name: "Stat 3 Label",
      defaultValue: "Years Experience",
    }),
  },
});

export default AboutSectionComponent;
