const { defineConfig } = require("cypress");

module.exports = {
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents: (on, config) => {
      // implement node event listeners here
    }
  }
};

