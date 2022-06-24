const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://mcstaging.godfreys.com.au/",
    defaultCommandTimeout: 5000,
    viewportWidth: 1920,
    viewportHeight: 1080,

    $schema: "https://on.cypress.io/cypress.schema.json",
    projectId: "mimhrk",
    numTestsKeptInMemory: 0,
    supportFile: false,
  },

  component: {

  },

});

