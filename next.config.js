const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  // Development configuration
  if (isDev) {
    return {
      env: {
        SMTP_HOST: "smtp.gmail.com",
        SMTP_USER: "tadesse.eshetu@gmail.com",
        SMTP_PASS: "bpzcpnlrnhvjfizl",
        SUPPORT_EMAIL: "info@eynsolutions.com",
        RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY || "your-recaptcha-site-key",
        RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY || "your-recaptcha-secret-key",
      },
    };
  }

  // Production configuration
  return {
    env: {
      SMTP_HOST: "smtp.gmail.com",
      SMTP_USER: "tadesse.eshetu@gmail.com",
      SMTP_PASS: "bpzcpnlrnhvjfizl",
      SUPPORT_EMAIL: "info@eynsolutions.com",
      RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY || "your-recaptcha-site-key",
      RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY || "your-recaptcha-secret-key",
    },
  };
};
