import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import mochawesome from "cypress-mochawesome-reporter/plugin";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.ts",

    async setupNodeEvents(on, config) {
      // Add the Cucumber Preprocessor Plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Use ESBuild Preprocessor for Feature Files
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Mochawesome Reporter
      mochawesome(on);

      return config;
    },

    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "Cucumber Test Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    env: {
      TAGS: ""
    }
  },
});

