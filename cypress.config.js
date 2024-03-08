const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/e2e',
    baseUrl:'https://stg-cst.starwayseg.com/',
    defaultCommandTimeout: 5000,
    viewportWidth:1260,
    viewportHeight:700,
    projectId:"s4h1rp",
    downloadsFolder: 'cypress/files/downloads/file',
  },
});
