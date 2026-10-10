import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../common/ServiceCard";
import Button from "../common/Button";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Attract & Convert",
      description: "Turn visitors into qualified inquiries with clear messaging, conversion-focused websites, and connected lead capture.",
    },
    {
      title: "Automate & Streamline",
      description: "Reduce repetitive administrative work with AI-powered workflows, automated follow-ups, and practical business automation.",
    },
    {
      title: "Connect & Grow",
      description: "Connect your CRM, scheduling, and operational tools with integrated software systems that simplify operations and support growth.",
    },
  ];

  return (
    <section id="services" className="services">
      <h3>Better Systems. Meaningful Business Results.</h3>
      <p className="services-teaser">
        Start with the result your business needs: more qualified inquiries,
        less manual work, or smoother operations. We build the systems to help
        you get there and improve them as your business grows.
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
