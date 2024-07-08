const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // baseUrl: "https://example.com",
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 5000,
  screenshotsFolder: "cypress/screenshots",
  e2e: {
    specPattern: "cypress/integration/**/*.cy.js", // Adjust the path and pattern as per your project structure
  },
});