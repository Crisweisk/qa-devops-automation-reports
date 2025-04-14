module.exports = {
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "ui-tests/cypress/reports/.jsons",
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
      // aquí se pueden agregar eventos si es necesario
    }
  }
};
