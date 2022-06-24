const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://mcstaging.godfreys.com.au/",
    $schema: "https://on.cypress.io/cypress.schema.json",
    projectId: "mimhrk",
    viewportWidth: 1920,
    viewportHeight: 1080,
    numTestsKeptInMemory: 0,
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

