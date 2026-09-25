import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../common/ServiceCard";
import Button from "../common/Button";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Establish Your Digital Foundation",
      description: "Launch or improve a professional website and connect the essentials without overbuilding.",
    },
    {
      title: "Connect & Automate Your Business",
      description: "Reduce manual work and make your existing systems operate as one connected flow.",
    },
    {
      title: "Build a Custom Solution",
      description: "Create the portal, product, or operational tool your business cannot buy off the shelf.",
    },
  ];

  return (
    <section id="services" className="services">
      <h3>Where Should We Start?</h3>
      <p className="services-teaser">
        Start with the smallest solution that can create a meaningful result.
        We can support it, connect it, and improve it as your business grows.
      </p>
      <div className="service-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div className="services-cta-row">
        <Button onClick={() => navigate("/services")}>
          Explore Services & Pricing
        </Button>
      </div>
    </section>
  );
};

export default Services;
