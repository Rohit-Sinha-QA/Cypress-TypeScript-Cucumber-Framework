const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/reports/cucumber-json",
  reportPath: "cypress/reports/html",
  reportName: "Cypress Cucumber Report",
  pageTitle: "Cypress Automation Report",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "latest",
    },
    device: "Local machine",
    platform: {
      name: "windows",
      version: "10/11",
    },
  },
});
