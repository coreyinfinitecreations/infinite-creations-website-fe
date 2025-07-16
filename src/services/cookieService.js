// Cookie Service for managing cookie consent and handling
class CookieService {
  // Set a cookie with expiration
  setCookie(name, value, days = 365) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
  }

  // Get a cookie value
  getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Delete a cookie
  deleteCookie(name) {
    document.cookie = `${name}=; Max-Age=-99999999; path=/;`;
  }

  // Clear all cookies (for deny functionality)
  clearAllCookies() {
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();

      // Don't delete the consent cookie itself
      if (name !== "cookieConsent") {
        this.deleteCookie(name);
      }
    }
  }

  // Enable analytics cookies (Google Analytics, etc.)
  enableAnalytics() {
    // Enable Google Analytics if you have it
    if (typeof gtag !== "undefined") {
      gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }

    // Enable Facebook Pixel if you have it
    if (typeof fbq !== "undefined") {
      fbq("consent", "grant");
    }

    // Set analytics cookies
    this.setCookie("analytics_enabled", "true", 365);
    console.log("Analytics cookies enabled");
  }

  // Disable analytics cookies
  disableAnalytics() {
    // Disable Google Analytics
    if (typeof gtag !== "undefined") {
      gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }

    // Disable Facebook Pixel
    if (typeof fbq !== "undefined") {
      fbq("consent", "revoke");
    }

    // Remove analytics cookies
    this.deleteCookie("analytics_enabled");
    this.deleteCookie("_ga");
    this.deleteCookie("_ga_*");
    this.deleteCookie("_gid");
    this.deleteCookie("_gat");
    this.deleteCookie("_fbp");
    this.deleteCookie("_fbc");

    console.log("Analytics cookies disabled");
  }

  // Enable marketing cookies
  enableMarketing() {
    this.setCookie("marketing_enabled", "true", 365);
    console.log("Marketing cookies enabled");
  }

  // Disable marketing cookies
  disableMarketing() {
    this.deleteCookie("marketing_enabled");
    // Remove common marketing cookies
    this.deleteCookie("_fbp");
    this.deleteCookie("_fbc");
    this.deleteCookie("tr");
    console.log("Marketing cookies disabled");
  }

  // Enable functional cookies (always enabled for basic functionality)
  enableFunctional() {
    this.setCookie("functional_enabled", "true", 365);
    console.log("Functional cookies enabled");
  }

  // Handle accept all cookies
  acceptAllCookies() {
    localStorage.setItem("cookieConsent", "accepted");
    this.setCookie("cookieConsent", "accepted", 365);

    // Enable all cookie types
    this.enableAnalytics();
    this.enableMarketing();
    this.enableFunctional();

    // Fire custom event for other parts of the app
    window.dispatchEvent(new CustomEvent("cookiesAccepted"));

    console.log("All cookies accepted and enabled");
  }

  // Handle deny all cookies
  denyAllCookies() {
    localStorage.setItem("cookieConsent", "denied");
    this.setCookie("cookieConsent", "denied", 365);

    // Disable all non-essential cookies
    this.disableAnalytics();
    this.disableMarketing();

    // Clear existing cookies
    this.clearAllCookies();

    // Only keep essential functional cookies
    this.enableFunctional();

    // Fire custom event for other parts of the app
    window.dispatchEvent(new CustomEvent("cookiesDenied"));

    console.log("All cookies denied and cleared");
  }

  // Check if user has given consent
  hasConsent() {
    const consent =
      localStorage.getItem("cookieConsent") || this.getCookie("cookieConsent");
    return consent === "accepted";
  }

  // Check if user has made a choice
  hasChoiceMade() {
    const consent =
      localStorage.getItem("cookieConsent") || this.getCookie("cookieConsent");
    return consent === "accepted" || consent === "denied";
  }

  // Get consent status
  getConsentStatus() {
    return (
      localStorage.getItem("cookieConsent") || this.getCookie("cookieConsent")
    );
  }

  // Save granular cookie preferences
  saveGranularPreferences(preferences) {
    const prefString = JSON.stringify(preferences);
    localStorage.setItem("cookiePreferences", prefString);
    this.setCookie("cookiePreferences", prefString, 365);

    // Apply the preferences
    if (preferences.analytics) {
      this.enableAnalytics();
    } else {
      this.disableAnalytics();
    }

    if (preferences.marketing) {
      this.enableMarketing();
    } else {
      this.disableMarketing();
    }

    // Always enable functional cookies
    this.enableFunctional();

    // Set overall consent status
    const hasAnyNonEssential = preferences.analytics || preferences.marketing;
    const consentStatus = hasAnyNonEssential ? "accepted" : "denied";
    localStorage.setItem("cookieConsent", consentStatus);
    this.setCookie("cookieConsent", consentStatus, 365);

    console.log("Granular cookie preferences saved:", preferences);
  }

  // Get granular cookie preferences
  getGranularPreferences() {
    const prefString =
      localStorage.getItem("cookiePreferences") ||
      this.getCookie("cookiePreferences");
    if (prefString) {
      try {
        return JSON.parse(prefString);
      } catch (e) {
        console.error("Error parsing cookie preferences:", e);
      }
    }

    // Default preferences based on current consent
    const consent = this.getConsentStatus();
    return {
      essential: true,
      functional: true,
      analytics: consent === "accepted",
      marketing: consent === "accepted",
    };
  }
}

export default new CookieService();
