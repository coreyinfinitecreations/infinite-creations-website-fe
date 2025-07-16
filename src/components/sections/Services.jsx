import React from "react";
import ServiceCard from "../common/ServiceCard";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description: "Modern, responsive websites that engage your audience",
    },
    {
      title: "Software Development",
      description: "Custom applications tailored to your business needs",
    },
    {
      title: "Digital Solutions",
      description: "Comprehensive digital strategies for your success",
    },
  ];

  return (
    <section className="services">
      <h3>Our Services</h3>
      <div className="service-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
