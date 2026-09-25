import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: "✨",
      title: "Outcomes Before Tools",
      description:
        "We begin with the operational or customer problem, then choose technology that fits the job.",
    },
    {
      icon: "🤝",
      title: "Partner, Not a Handoff",
      description:
        "You get direct communication, honest tradeoffs, and a team that stays close from discovery through improvement.",
    },
    {
      icon: "⚡",
      title: "Connected by Design",
      description:
        "We consider the people, data, and systems around every solution so it works in the real business.",
    },
    {
      icon: "📈",
      title: "Useful, Measurable Progress",
      description:
        "We ship practical improvements, document what we build, and measure what changes.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About Infinite Creations</h1>
            <p className="hero-description">
              We are a technology partner for businesses ready to simplify
              operations, connect their systems, and build what comes next.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <span className="about-badge">Our Story</span>
              <h2 className="section-heading">
                Practical technology, built with the business in mind
              </h2>
              <p>
                Infinite Creations started by helping businesses create a
                stronger digital presence. That work exposed a bigger need:
                teams were also losing time to disconnected tools, manual
                processes, and software that did not fit how they operated.
              </p>
              <p>
                Today we work across the business—from AI-enabled workflows and
                system integrations to custom products, digital growth, and the
                websites that support them. The goal is not more technology.
                It is a business that works better because the right technology
                is in place.
              </p>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Infinite Creations team collaborating"
                className="story-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title">What We Stand For</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Have a process that should work better?</h2>
            <p className="cta-description">
              Tell us where the friction is. We will respond with honest
              feedback and a clear next step. No pressure, no jargon.
            </p>
            <div className="cta-actions">
              <button
                className="btn-cta-primary"
                onClick={() => navigate("/get-started")}
              >
                Start a Conversation
              </button>
              <button
                className="btn-cta-secondary"
                onClick={() => navigate("/portfolio")}
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
