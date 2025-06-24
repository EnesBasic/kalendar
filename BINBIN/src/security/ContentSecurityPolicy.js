const CSP_CONFIG = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", "trusted.cdn.com"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "cdn.example.com"],
    connectSrc: ["'self'", "api.example.com"],
    fontSrc: ["'self'", "fonts.gstatic.com"],
    objectSrc: ["'none'"],
    frameAncestors: ["'none'"],
    formAction: ["'self'"],
    upgradeInsecureRequests: true
  }
};

export default CSP_CONFIG;