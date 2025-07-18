import React from "react";
import "./ViewOurWork.css";

const ViewOurWork = () => {
  const projects = [
    {
      id: 1,
      title: "Providence Medical Clinic",
      category: "Web Development",
      description:
        "Professional medical clinic website with modern design, patient portal integration, and comprehensive healthcare services information.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "Strapi", "API Development"],
      url: "https://www.providenceclinic.org",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A modern, responsive e-commerce solution with advanced features and seamless user experience.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      url: "#",
    },
    {
      id: 3,
      title: "Corporate Website",
      category: "Web Design",
      description:
        "Professional corporate website with clean design and optimized performance.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["WordPress", "PHP", "MySQL", "CSS3"],
      url: "#",
    },
    {
      id: 4,
      title: "Healthcare App",
      category: "Mobile Development",
      description:
        "Innovative healthcare mobile application with user-friendly interface and secure data handling.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      url: "#",
    },
    {
      id: 5,
      title: "Restaurant Management System",
      category: "Software Development",
      description:
        "Comprehensive restaurant management system with inventory, orders, and analytics.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      url: "#",
    },
    {
      id: 6,
      title: "Digital Marketing Campaign",
      category: "Digital Marketing",
      description:
        "Successful digital marketing campaign that increased client engagement by 300%.",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Google Ads", "Facebook Ads", "SEO", "Analytics"],
      url: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "Web Design",
      description:
        "Creative portfolio website showcasing artistic work with stunning visual presentation.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      url: "#",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Web Design",
    "Mobile Development",
    "Software Development",
    "Digital Marketing",
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="view-our-work">
      {/* Hero Section */}
      <section className="work-hero">
        <div className="work-hero-content">
          <h1 className="work-hero-title">Our Work</h1>
          <p className="work-hero-description">
            Discover our portfolio of successful projects and see how we've
            helped businesses achieve their digital goals through innovative
            solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="work-filter">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid">
        <div className="container">
          <div className="projects-container">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-actions">
                      <button
                        className="view-project-btn"
                        onClick={() => {
                          if (project.url && project.url !== "#") {
                            window.open(
                              project.url,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }
                        }}
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="work-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-description">
              Let's collaborate to bring your vision to life with our expertise
              and creativity.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Started Today</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewOurWork;
