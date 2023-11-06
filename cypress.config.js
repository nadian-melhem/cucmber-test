const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const options = browserify.defaultOptions;
      allureWriter(on, config);
      on("file:preprocessor", cucumber(options));
      return config;
    },
    specPattern: "cypress/e2e/bdd-tests/Login.feature",
  },
  env: {
    allureReuseAfterSpec: true,
    download_dir: "./cypress/downloads",
  },
  allureResulsPath: "allure-results",
  videosFolder: "allure-results/",
  screenshotOnRunFailure: true,
});
