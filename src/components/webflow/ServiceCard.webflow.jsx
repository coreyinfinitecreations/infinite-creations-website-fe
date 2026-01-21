import React from "react";
import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";

const ServiceCard = ({
  title = "Service Title",
  description = "Description of the service goes here.",
  iconEmoji = "🚀",
}) => {
  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    border: "1px solid #f0f0f0",
  };

  const iconStyle = {
    fontSize: "48px",
    marginBottom: "16px",
    display: "block",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "700",
    color: "#000000",
    marginBottom: "12px",
    lineHeight: "1.3",
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "#666666",
    lineHeight: "1.6",
    margin: 0,
  };

  return (
    <div className="service-card" style={cardStyle}>
      <span style={iconStyle}>{iconEmoji}</span>
      <h4 style={titleStyle}>{title}</h4>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

const ServiceCardComponent = declareComponent(ServiceCard, {
  name: "ServiceCard",
  description:
    "A service card component showcasing Infinite Creations offerings",
  props: {
    title: props.Text({ name: "Title", defaultValue: "Service Title" }),
    description: props.Text({
      name: "Description",
      defaultValue: "Description of the service goes here.",
    }),
    iconEmoji: props.Text({ name: "Icon Emoji", defaultValue: "🚀" }),
  },
});

export default ServiceCardComponent;
