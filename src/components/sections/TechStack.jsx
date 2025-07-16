import React from "react";
import "./TechStack.css";

const TechStack = () => {
  const techStack = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "Frontend",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "Frontend",
    },
    {
      name: "Vue.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      category: "Frontend",
    },
    {
      name: ".NET",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
      category: "Backend",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "Backend",
    },
    {
      name: "Azure",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      category: "Cloud",
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      category: "Cloud",
    },
    {
      name: "API Development",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      category: "Backend",
    },
  ];

  return (
    <section className="tech-stack">
      <div className="tech-stack-container">
        <div className="tech-stack-header">
          <h2 className="tech-stack-title">Our Technology Stack</h2>
          <p className="tech-stack-description">
            We leverage cutting-edge technologies to deliver robust, scalable
            solutions that drive your business forward.
          </p>
        </div>

        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="tech-logo"
                />
              </div>
              <div className="tech-info">
                <h3 className="tech-name">{tech.name}</h3>
                <span className="tech-category">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="tech-stack-footer">
          <p className="tech-stack-note">
            Our diverse technology stack allows us to choose the right tools for
            each project, ensuring optimal performance and maintainability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
