import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 5000,
  screenshotsFolder: "screenshots",
  fileServerFolder: "logs",
  retries: 1,
  e2e: {
    baseUrl: "https://qaplayground.dev/",
    setupNodeEvents(on, config) {
      on('task', {
        failed(message) {
          console.error(message);
          return null;
        },
      });

      // on('before:browser:launch', (browser = {}, launchOptions) => {
      //   if (browser.name === 'chrome') {
      //     launchOptions.args.push('--remote-debugging-port=9222');
      //   }
      //   return launchOptions;
      // });
      // return config;
    },
    specPattern: "cypress/tests/**/*.cy.js",
  },
});