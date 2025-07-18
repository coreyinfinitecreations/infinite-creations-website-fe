import React, { useState } from "react";
import "./GetStarted.css";

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Format phone number as user types
  const formatPhoneNumber = (value) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, "");

    // Format based on length
    if (phoneNumber.length < 4) {
      return phoneNumber;
    } else if (phoneNumber.length < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    // Format phone number
    if (name === "phone") {
      formattedValue = formatPhoneNumber(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.projectType)
      newErrors.projectType = "Please select a project type";
    if (!formData.message.trim())
      newErrors.message = "Please describe your project";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      try {
        // Send form data to Web3Forms (which forwards to hello@infinitecreations.io)
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: "3b4ec01f-9bf9-472f-80a8-960275a2553b",
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            project_type: formData.projectType,
            budget: formData.budget,
            timeline: formData.timeline,
            message: formData.message,
            subject: `New Project Inquiry from ${formData.name}`,
            from_name: formData.name,
            to_email: "hello@infinitecreations.io",
          }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          console.log("Form submitted successfully:", formData);
          setIsSubmitted(true);

          // Reset form
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            projectType: "",
            budget: "",
            timeline: "",
            message: "",
          });
        } else {
          throw new Error(data.message || "Failed to submit form");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert(
          "There was an error submitting your form. Please try again or contact us directly at hello@infinitecreations.io"
        );
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Custom websites built with modern technologies",
      features: [
        "Responsive Design",
        "CMS Integration",
        "E-commerce",
        "Web Apps",
      ],
    },
    {
      icon: "🎨",
      title: "Web Design",
      description: "Beautiful, user-friendly designs that convert",
      features: ["UI/UX Design", "Branding", "Wireframing", "Prototyping"],
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS Apps", "Android Apps", "React Native", "Flutter"],
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description: "Drive traffic and increase conversions",
      features: ["SEO", "PPC Advertising", "Social Media", "Analytics"],
    },
  ];

  if (isSubmitted) {
    return (
      <div className="get-started">
        <div className="success-message">
          <div className="container">
            <div className="success-content">
              <div className="success-animation">
                <div className="checkmark-circle">
                  <i className="fas fa-check checkmark-icon"></i>
                </div>
              </div>

              <h1 className="success-title">Request Submitted Successfully!</h1>

              <p className="success-description">
                Thank you for your interest in working with Infinite Creations.
                We've received your project details and will review them
                carefully.
              </p>

              <div className="success-actions">
                <button
                  className="btn-secondary"
                  onClick={() => (window.location.href = "/")}
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="get-started">
      {/* Hero Section */}
      <section className="get-started-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Get Started Today</h1>
            <p className="hero-description">
              Ready to bring your digital vision to life? Let's discuss your
              project and create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2 className="form-title">Tell Us About Your Project</h2>
              <p className="form-description">
                Fill out the form below and we'll get back to you with a
                detailed proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? "error" : ""}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? "error" : ""}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    maxLength="14"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className={errors.projectType ? "error" : ""}
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="web-design">Web Design</option>
                    <option value="mobile-development">
                      Mobile Development
                    </option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.projectType && (
                    <span className="error-message">{errors.projectType}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="over-50k">Over $50,000</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="timeline">Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Description *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={errors.message ? "error" : ""}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  rows="6"
                />
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send My Request"}
                  {!isSubmitting && (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M18 2L9 11L4 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose Infinite Creations?</h2>
          <div className="reasons-grid">
            <div className="reason-item">
              <div className="reason-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>We deliver projects on time without compromising quality.</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">🎯</div>
              <h3>Tailored Solutions</h3>
              <p>Every project is customized to meet your specific needs.</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">🏆</div>
              <h3>Expert Team</h3>
              <p>Our skilled professionals bring years of experience.</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>We're always here to help you succeed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
