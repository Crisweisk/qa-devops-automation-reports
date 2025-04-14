module.exports = {
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/.jsons",
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    supportFile: false
  }
};
