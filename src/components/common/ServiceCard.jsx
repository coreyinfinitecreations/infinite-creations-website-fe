import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
