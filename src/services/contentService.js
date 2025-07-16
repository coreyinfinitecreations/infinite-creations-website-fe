// Content Service - Manages content and data
import apiService from "./apiService";

class ContentService {
  // Get services data
  async getServices() {
    try {
      // For now, return mock data. In a real app, this would fetch from API
      return [
        {
          id: 1,
          title: "Web Design",
          description: "Modern, responsive websites that engage your audience",
          icon: "🌐",
        },
        {
          id: 2,
          title: "Software Development",
          description: "Custom applications tailored to your business needs",
          icon: "💻",
        },
        {
          id: 3,
          title: "Digital Solutions",
          description: "Comprehensive digital strategies for your success",
          icon: "🚀",
        },
      ];
    } catch (error) {
      console.error("Failed to fetch services:", error);
      throw error;
    }
  }

  // Get company information
  async getCompanyInfo() {
    try {
      return {
        name: "Infinite Creations",
        tagline: "Web Design & Software Development",
        description:
          "We create stunning websites and innovative software solutions that bring your ideas to life.",
        logo: "/infinite-creations-logo.png",
        contactEmail: "info@infinitecreations.com",
        phone: "+1 (555) 123-4567",
      };
    } catch (error) {
      console.error("Failed to fetch company info:", error);
      throw error;
    }
  }

  // Get testimonials
  async getTestimonials() {
    try {
      return [
        {
          id: 1,
          name: "John Smith",
          company: "Tech Solutions Inc",
          message:
            "Infinite Creations delivered an outstanding website that exceeded our expectations.",
          rating: 5,
        },
        {
          id: 2,
          name: "Sarah Johnson",
          company: "Creative Agency",
          message:
            "Their software development expertise helped us streamline our operations.",
          rating: 5,
        },
      ];
    } catch (error) {
      console.error("Failed to fetch testimonials:", error);
      throw error;
    }
  }
}

export default new ContentService();
