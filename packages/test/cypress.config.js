/* eslint-disable @typescript-eslint/no-unused-vars */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  fixturesFolder: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
  },
});
