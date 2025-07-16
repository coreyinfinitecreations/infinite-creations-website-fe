// Analytics Service - Handles tracking and analytics
class AnalyticsService {
  constructor() {
    this.isEnabled = import.meta.env.VITE_ANALYTICS_ENABLED === "true";
    this.events = [];
    this.initializeConsentListener();
  }

  // Initialize consent listener
  initializeConsentListener() {
    // Listen for cookie consent events
    window.addEventListener("cookiesAccepted", () => {
      this.enableAnalytics();
    });

    window.addEventListener("cookiesDenied", () => {
      this.disableAnalytics();
    });
  }

  // Check if user has given consent for analytics
  hasAnalyticsConsent() {
    const consent = localStorage.getItem("cookieConsent");
    return consent === "accepted";
  }

  // Enable analytics tracking
  enableAnalytics() {
    console.log("Analytics tracking enabled");
    // Initialize Google Analytics if available
    if (typeof gtag !== "undefined") {
      gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  }

  // Disable analytics tracking
  disableAnalytics() {
    console.log("Analytics tracking disabled");
    // Disable Google Analytics if available
    if (typeof gtag !== "undefined") {
      gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  }

  // Track page views
  trackPageView(page) {
    if (!this.isEnabled || !this.hasAnalyticsConsent()) return;

    const event = {
      type: "page_view",
      page,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    this.events.push(event);
    this.sendEvent(event);
  }

  // Track user interactions
  trackEvent(category, action, label = "", value = 0) {
    if (!this.isEnabled || !this.hasAnalyticsConsent()) return;

    const event = {
      type: "user_event",
      category,
      action,
      label,
      value,
      timestamp: new Date().toISOString(),
      url: window.location.href,
    };

    this.events.push(event);
    this.sendEvent(event);
  }

  // Track button clicks
  trackButtonClick(buttonName, location = "") {
    this.trackEvent("button", "click", `${buttonName}_${location}`);
  }

  // Track form submissions
  trackFormSubmission(formName, success = true) {
    this.trackEvent(
      "form",
      success ? "submit_success" : "submit_error",
      formName
    );
  }

  // Send event to analytics service
  async sendEvent(event) {
    try {
      // In a real app, this would send to your analytics service
      console.log("Analytics Event:", event);

      // Example: Send to Google Analytics, Mixpanel, etc.
      // await apiService.post('/analytics/events', event);
    } catch (error) {
      console.error("Failed to send analytics event:", error);
    }
  }

  // Get stored events (for debugging)
  getEvents() {
    return this.events;
  }

  // Clear events
  clearEvents() {
    this.events = [];
  }
}

export default new AnalyticsService();
