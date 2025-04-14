const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    supportFile: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/.jsons",
      overwrite: false,
      html: false,
      json: true
    },
    setupNodeEvents(on, config) {
      // Aquí puedes agregar hooks si los necesitas
    }
  }
});
