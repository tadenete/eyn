const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    //we're in development mode.
    return {
      env: {
        smtp_host: "smtp-relay.sendinblue.com",
        smtp_user: "info@eynsolutions.com",
        smtp_pass: "your-smtp-password-here",
        support_email: "info@eynsolutions.com",
        RECAPTCHA_SITE_KEY: 'your-recaptcha-site-key',
        RECAPTCHA_SECRET_KEY: 'your-recaptcha-secret-key'
      },
    };
  }

  //we're not in development mode..
  return {
    env: {
      smtp_host: "smtp-relay.sendinblue.com",
      smtp_user: "info@eynsolutions.com",
      smtp_pass: "your-smtp-password-here",
      support_email: "info@eynsolutions.com",
      RECAPTCHA_SITE_KEY: 'your-recaptcha-site-key',
      RECAPTCHA_SECRET_KEY: 'your-recaptcha-secret-key'
    },
  };
};
