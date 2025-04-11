const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const mochawesome = require("cypress-mochawesome-reporter/plugin");


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // 🔹 Add the Cucumber Preprocessor Plugin
      await addCucumberPreprocessorPlugin(on, config);

      // 🔹 Use ESBuild Preprocessor for Feature Files
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      mochawesome(on);

      return config; // Make sure to return the config object
    },

    specPattern: "cypress/e2e/**/*.feature", // Update this if needed
    supportFile: "cypress/support/e2e.js",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "Cucumber Test Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  },
});
