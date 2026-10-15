import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../common/ServiceCard";
import Button from "../common/Button";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Websites & Digital Experiences",
      description: "Build trust and make it easier for customers to find, contact, book, or buy from you with professional websites, e-commerce, and customer portals.",
    },
    {
      title: "Automation & Workflows",
      description: "Save time by connecting your CRM, scheduling, and business tools with smart intake, follow-ups, software integrations, and practical AI workflows.",
    },
    {
      title: "Marketing & Customer Growth",
      description: "Reach the right customers and convert more inquiries with local SEO, landing pages, email marketing, and lead-nurturing campaigns.",
    },
    {
      title: "Business Systems & Support",
      description: "Keep operations running smoothly with custom dashboards, internal tools, website care, hosting, maintenance, and ongoing improvements.",
    },
  ];

  return (
    <section id="services" className="services">
      <h3>More Customers. Less Busywork. Better Business.</h3>
      <p className="services-teaser">
        You shouldn't need separate partners for every digital challenge. From your website and marketing to your daily workflows, we connect the pieces that help your business grow.
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
