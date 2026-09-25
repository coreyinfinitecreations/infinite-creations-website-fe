import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const paths = [
  {
    name: "Establish Your Digital Foundation",
    price: "From $1,500",
    unit: "or $175/mo for 12 months",
    tagline: "Launch a professional customer experience without paying for technology you do not need.",
    features: ["Focused 3–5 page website", "AI-assisted build with professional UI/UX refinement", "Foundational SEO, analytics, and lead capture", "Mobile, accessibility, performance, and launch QA"],
  },
  {
    name: "Connect & Automate Your Business",
    price: "From $2,500",
    unit: "scoped around the workflow",
    tagline: "Reduce repetitive work and make the tools you already use operate as one connected system.",
    features: ["Workflow and process mapping", "AI-assisted intake, routing, and follow-up", "CRM, scheduling, billing, and operations connections", "Human review, measurement, and team handoff"],
  },
  {
    name: "Build a Custom Solution",
    price: "Custom scope",
    unit: "delivered in practical phases",
    tagline: "Create the portal, internal tool, or digital product your business cannot buy off the shelf.",
    features: ["Product strategy and experience design", "Web applications and customer portals", "Internal operations tools", "Iterative launch and ongoing improvement"],
  },
];

const ongoingServices = [
  {
    name: "Digital Growth",
    price: "From $750/mo",
    tagline: "Focus digital activity on measurable journeys, not a fixed volume of posts.",
    features: ["Conversion and customer-journey improvements", "Search, content, email, and campaign strategy", "Analytics and plain-English reporting", "Ongoing testing and optimization"],
  },
  {
    name: "Care & Optimization",
    price: "From $295/mo",
    tagline: "Keep your digital systems healthy and make them better over time.",
    features: ["Hosting, updates, backups, and monitoring", "Small content and configuration changes", "Performance and reliability improvements", "A responsive partner when needs change"],
  },
];

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container"><div className="hero-content">
          <h1 className="hero-title">Technology built around how your business works</h1>
          <p className="hero-description">We find the friction slowing your team down, then build the automation, connected systems, software, and digital foundation that moves the business forward.</p>
          <button className="btn-cta-primary" onClick={() => navigate("/get-started")}>Start with a Conversation</button>
        </div></div>
      </section>

      <section className="services-plans">
        <div className="container">
          <h2 className="section-title">Where Should We Start?</h2>
          <p className="section-subtitle">Choose the path closest to where your business is today. We will recommend the smallest solution that can produce a meaningful result.</p>
          <div className="plans-grid">
            {paths.map((path) => (
              <div key={path.name} className="plan-card">
                <h3 className="plan-name">{path.name}</h3>
                <p className="plan-price">
                  <span className="plan-price-value">{path.price}</span>
                  <span className="plan-unit">{path.unit}</span>
                </p>
                <p className="plan-tagline">{path.tagline}</p>
                <ul className="plan-features">{path.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <button className="btn-plan-secondary" onClick={() => navigate("/get-started")}>Start This Conversation</button>
              </div>
            ))}
          </div>
          <div className="plans-terms"><p><strong>Pricing is a starting point.</strong> We scope around the problem, the systems involved, and the value of solving it. You will receive a clear recommendation before work begins.</p></div>
        </div>
      </section>

      <section className="services-projects">
        <div className="container">
          <h2 className="section-title">Keep Improving After Launch</h2>
          <p className="section-subtitle">Growth and care support every path. Add ongoing help when the business needs consistent attention, measurement, and improvement.</p>
          <div className="ongoing-grid">
            {ongoingServices.map((service) => (
              <div key={service.name} className="ongoing-card">
                <div>
                  <h3 className="project-name">{service.name}</h3>
                  <p className="ongoing-price">{service.price}</p>
                  <p className="project-tagline">{service.tagline}</p>
                </div>
                <ul className="plan-features">{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-process">
        <div className="container">
          <h2 className="section-title">A Practical Path from Problem to Progress</h2>
          <p className="section-subtitle">Clear decisions, useful releases, and technology your team can confidently own.</p>
          <div className="projects-grid">
            {[
              ["01 — Discover", "Map the workflow, users, systems, constraints, and result that matters."],
              ["02 — Build", "Deliver the highest-value version first, connect it to the real business, and test it with users."],
              ["03 — Improve", "Measure performance, train the team, and iterate as the business changes."],
            ].map(([name, tagline]) => <div key={name} className="project-card"><h3 className="project-name">{name}</h3><p className="project-tagline">{tagline}</p></div>)}
          </div>
        </div>
      </section>

      <section className="services-cta"><div className="container"><div className="cta-content">
        <h2 className="cta-title">Not sure which path fits?</h2>
        <p className="cta-description">Start with a conversation. We will recommend the smallest solution that can produce a meaningful result—without forcing a tool or oversized project.</p>
        <button className="btn-cta-primary" onClick={() => navigate("/get-started")}>Find the Right Starting Point</button>
      </div></div></section>
    </div>
  );
};

export default Services;
