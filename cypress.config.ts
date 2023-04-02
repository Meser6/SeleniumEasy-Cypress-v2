import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    // https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md#example-setup
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    baseUrl: "https://demo.seleniumeasy.com",
    specPattern: "cypress/e2e/**/*.feature",
    watchForFileChanges: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    screenshotsFolder: "cypress/report/screenshots",
  },
});
