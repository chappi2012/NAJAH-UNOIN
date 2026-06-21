/**
 * Vercel Web Analytics - Initialization Script
 * This script initializes Vercel Analytics for static HTML sites
 */
(function() {
  // Initialize the analytics queue
  window.va = window.va || function () {
    (window.vaq = window.vaq || []).push(arguments);
  };
  
  // Detect environment (development vs production)
  var isDev = window.location.hostname === 'localhost' || 
              window.location.hostname === '127.0.0.1' ||
              window.location.hostname === '';
  
  // Set mode
  window.vam = isDev ? 'development' : 'production';
  
  // Only inject in production (when deployed to Vercel)
  if (window.vam === 'production') {
    // Create and inject the Vercel Analytics script
    var script = document.createElement('script');
    script.defer = true;
    script.src = '/_vercel/insights/script.js';
    
    // Append to head
    var head = document.head || document.getElementsByTagName('head')[0];
    if (head) {
      head.appendChild(script);
    }
  } else {
    // Log in development mode
    console.log('[Vercel Analytics] Running in development mode - analytics disabled');
  }
})();
