import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const plans = [
  {
    name: "Launch",
    price: "$750",
    unit: "/mo",
    tagline: "For businesses getting their online presence right.",
    features: [
      "Social media posts 3x per week",
      "Google Business Profile management",
      "Review monitoring and responses",
      "Monthly performance snapshot",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$1,500",
    unit: "/mo",
    badge: "Most Popular",
    tagline: "Everything in Launch, plus campaigns and content that bring customers in.",
    features: [
      "Everything in Launch",
      "One email or SMS campaign per month",
      "One monthly content piece (blog post or promo)",
      "Plain-English monthly report tying activity to traffic and leads",
      "Quarterly strategy call",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$2,500",
    unit: "/mo",
    tagline: "Everything in Growth, plus paid reach and priority support.",
    features: [
      "Everything in Growth",
      "Paid ads management (ad spend billed separately)",
      "Loyalty and promo campaigns",
      "Lead-generation funnel",
      "Priority support",
      "Monthly strategy call",
    ],
    highlighted: false,
  },
];

const projects = [
  {
    name: "Custom Website",
    price: "$3,000",
    unit: "one-time",
    tagline: "A new website, built right, in 3–4 weeks.",
    features: [
      "5-page mobile-first website",
      "SEO basics built in",
      "Google Business Profile setup",
      "Lead-capture forms",
    ],
  },
  {
    name: "Website as a Service",
    price: "$0 down",
    unit: "$400/mo for 12 months",
    tagline: "The same website, with an easier yes for small businesses.",
    features: [
      "Everything in the custom website",
      "Hosting included",
      "Ongoing updates and care",
    ],
  },
  {
    name: "Care Plan",
    price: "$295",
    unit: "/mo",
    tagline: "Keep an existing site healthy and up to date.",
    features: [
      "Hosting, updates, and backups",
      "Small content changes",
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              One partner for your website and your marketing
            </h1>
            <p className="hero-description">
              A project gets you a website. A partner gets you customers. Pick
              a monthly plan and we'll handle your site, your marketing, and
              the follow-through — every month.
            </p>
            <button
              className="btn-cta-primary"
              onClick={() => navigate("/get-started")}
            >
              Start with a Conversation
            </button>
          </div>
        </div>
      </section>

      {/* Monthly plans */}
      <section className="services-plans">
        <div className="container">
          <h2 className="section-title">Digital Partner Plans</h2>
          <p className="section-subtitle">
            One monthly payment, everything handled. Pick the level that fits
            where your business is right now.
          </p>
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`plan-card ${plan.highlighted ? "plan-card-highlighted" : ""}`}
              >
                {plan.badge && (
                  <span className="plan-badge">{plan.badge}</span>
                )}
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-price">
                  {plan.price}
                  <span className="plan-unit">{plan.unit}</span>
                </p>
                <p className="plan-tagline">{plan.tagline}</p>
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button
                  className={
                    plan.highlighted
                      ? "btn-cta-primary"
                      : "btn-plan-secondary"
                  }
                  onClick={() => navigate("/get-started")}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
          <div className="plans-terms">
            <p>
              <strong>No long-term contracts.</strong> 3-month minimum to start,
              then month-to-month. Cancel anytime after with 30 days notice. No
              setup fees when bundled with a website project.
            </p>
          </div>
        </div>
      </section>

      {/* Website projects */}
      <section className="services-projects">
        <div className="container">
          <h2 className="section-title">Website Projects</h2>
          <p className="section-subtitle">
            Need a website first? Start here — then roll into a partner plan and
            keep the momentum going.
          </p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-price">
                  {project.price}
                  <span className="project-unit">{project.unit}</span>
                </p>
                <p className="project-tagline">{project.tagline}</p>
                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Let's talk about your business</h2>
            <p className="cta-description">
              Tell us where you are and where you want to go — we'll recommend
              the plan that fits. No pressure, no jargon.
            </p>
            <button
              className="btn-cta-primary"
              onClick={() => navigate("/get-started")}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
