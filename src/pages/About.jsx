import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: "✨",
      title: "Craft Over Templates",
      description:
        "Every project is designed and built around your goals — never a cookie-cutter theme with your logo swapped in.",
    },
    {
      icon: "🤝",
      title: "Partner, Not Vendor",
      description:
        "You get direct communication, honest timelines, and a team that treats your business like its own.",
    },
    {
      icon: "⚡",
      title: "Modern by Default",
      description:
        "We build with current tools — React, modern APIs, cloud infrastructure — so your site stays fast and maintainable.",
    },
    {
      icon: "📈",
      title: "Built to Convert",
      description:
        "Design is only half the job. Every page is structured to turn visitors into customers.",
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
              We're a digital solutions studio helping businesses turn ideas
              into websites, apps, and marketing that actually perform.
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
                Digital excellence, without the agency runaround
              </h2>
              <p>
                Infinite Creations started with a simple frustration: too many
                businesses were overpaying for underwhelming websites. We
                built the studio we wished existed — one that pairs thoughtful
                design with solid engineering, and actually picks up the phone.
              </p>
              <p>
                Today we help companies of all sizes launch and grow online:
                from marketing sites that convert, to custom software that
                runs your operations, to digital marketing that brings
                customers through the door.
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
            <h2 className="cta-title">Have a project in mind?</h2>
            <p className="cta-description">
              Tell us about it — we'll respond with honest feedback and a clear
              proposal. No pressure, no jargon.
            </p>
            <div className="cta-actions">
              <button
                className="btn-cta-primary"
                onClick={() => navigate("/get-started")}
              >
                Get Started Today
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
