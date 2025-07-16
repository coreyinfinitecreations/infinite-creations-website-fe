// Utility functions for cookie consent handling
export const showCookieNotification = (message, type = "info") => {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `cookie-notification cookie-notification-${type}`;
  notification.textContent = message;

  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === "success" ? "#10b981" : "#6b7280"};
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
    z-index: 10000;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    animation: slideInRight 0.3s ease-out;
    max-width: 300px;
  `;

  // Add animation keyframes
  if (!document.querySelector("#cookie-notification-styles")) {
    const style = document.createElement("style");
    style.id = "cookie-notification-styles";
    style.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOutRight {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(notification);

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
};

// Check if analytics should be loaded
export const shouldLoadAnalytics = () => {
  const consent = localStorage.getItem("cookieConsent");
  return consent === "accepted";
};

// Check if marketing scripts should be loaded
export const shouldLoadMarketing = () => {
  const consent = localStorage.getItem("cookieConsent");
  return consent === "accepted";
};

// Initialize third-party scripts based on consent
export const initializeScripts = () => {
  if (shouldLoadAnalytics()) {
    // Initialize Google Analytics
    loadGoogleAnalytics();
  }

  if (shouldLoadMarketing()) {
    // Initialize marketing scripts
    loadMarketingScripts();
  }
};

// Load Google Analytics
const loadGoogleAnalytics = () => {
  // Add your Google Analytics tracking ID here
  const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Replace with your actual GA ID

  if (typeof gtag === "undefined") {
    // Load GA script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize GA
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", GA_TRACKING_ID);
      console.log("Google Analytics loaded and initialized");
    };
  }
};

// Load marketing scripts (Facebook Pixel, etc.)
const loadMarketingScripts = () => {
  // Add your Facebook Pixel ID here
  const FB_PIXEL_ID = "XXXXXXXXXX"; // Replace with your actual Pixel ID

  if (typeof fbq === "undefined") {
    // Load Facebook Pixel
    const script = document.createElement("script");
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${FB_PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);
    console.log("Facebook Pixel loaded and initialized");
  }
};

export default {
  showCookieNotification,
  shouldLoadAnalytics,
  shouldLoadMarketing,
  initializeScripts,
};
