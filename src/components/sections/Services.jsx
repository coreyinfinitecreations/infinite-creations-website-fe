import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../common/ServiceCard";
import Button from "../common/Button";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Launch — $750/mo",
      description: "Your online presence, handled: social posts, Google Business Profile, and reviews.",
    },
    {
      title: "Growth — $1,500/mo",
      description: "Everything in Launch plus campaigns, content, and a monthly report you can actually read.",
    },
    {
      title: "Scale — $2,500/mo",
      description: "Everything in Growth plus paid ads, loyalty campaigns, and a lead-generation funnel.",
    },
  ];

  return (
    <section className="services">
      <h3>Digital Partner Plans</h3>
      <p className="services-teaser">
        One partner for your website and your marketing. Pick a monthly plan —
        we'll handle the rest.
      </p>
      <div className="service-grid">
        {plans.map((plan, index) => (
          <ServiceCard
            key={index}
            title={plan.title}
            description={plan.description}
          />
        ))}
      </div>
      <div className="services-cta-row">
        <Button onClick={() => navigate("/services")}>
          See Plans & Pricing
        </Button>
      </div>
    </section>
  );
};

export default Services;
