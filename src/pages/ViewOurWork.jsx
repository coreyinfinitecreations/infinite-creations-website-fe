import React from "react";
import { useNavigate } from "react-router-dom";
import "./ViewOurWork.css";

const projects = [
  {
    title: "Gatherflow",
    category: "Custom Product",
    description: "A purpose-built digital product that demonstrates our ability to move from an idea to a working platform.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    problem: "Turn a new product concept into a clear, usable experience supported by dependable application architecture.",
    solution: "Product strategy, experience design, and full-stack software development delivered as one connected engagement.",
    integrations: "Application data, authentication, and the supporting services needed to operate the product.",
    outcome: "A real product foundation ready to be used, learned from, and improved—rather than a static concept or prototype.",
  },
  {
    title: "Providence Medical Clinic",
    category: "Digital Foundation",
    description: "A modern healthcare website designed to make essential information and next steps easier to find.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    problem: "Create a credible digital front door that organizes clinic information for patients across devices.",
    solution: "A responsive website with structured service content, clear calls to action, and maintainable publishing tools.",
    integrations: "Patient-access and appointment pathways connected to the clinic's broader digital experience.",
    outcome: "A clearer, more professional foundation for helping patients understand services and choose a next step.",
    url: "https://www.providenceclinic.org",
  },
];

const ViewOurWork = () => {
  const navigate = useNavigate();
  return (
    <div className="view-our-work">
      <section className="work-hero">
        <div className="work-hero-content">
          <h1 className="work-hero-title">Work Built Around Real Business Needs</h1>
          <p className="work-hero-description">A closer look at the problem, the solution, the connected systems, and the result—not a gallery of generic deliverables.</p>
        </div>
      </section>

      <section className="projects-grid">
        <div className="container"><div className="projects-container">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image"><img src={project.image} alt={`${project.title} project`} /></div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <dl className="case-study-details">
                  <div><dt>Customer problem</dt><dd>{project.problem}</dd></div>
                  <div><dt>Solution</dt><dd>{project.solution}</dd></div>
                  <div><dt>Connected systems</dt><dd>{project.integrations}</dd></div>
                  <div><dt>Documented outcome</dt><dd>{project.outcome}</dd></div>
                </dl>
                {project.url && <a className="view-project-link" href={project.url} target="_blank" rel="noreferrer">Visit the live project</a>}
              </div>
            </article>
          ))}
        </div></div>
      </section>

      <section className="work-proof-note"><div className="container">
        <p>We only publish results we can support. As projects produce approved measurements and customer stories, this collection will grow with the evidence.</p>
      </div></section>

      <section className="work-cta"><div className="container"><div className="cta-content">
        <h2 className="cta-title">What could work better in your business?</h2>
        <p className="cta-description">Bring us the bottleneck, the disconnected process, or the product idea. We will help you find a practical path forward.</p>
        <div className="cta-buttons"><button className="btn-primary" onClick={() => navigate("/get-started")}>Start a Conversation</button><button className="btn-secondary" onClick={() => navigate("/services")}>Explore Services</button></div>
      </div></div></section>
    </div>
  );
};

export default ViewOurWork;
