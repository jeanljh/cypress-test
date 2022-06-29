const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // reporter: 'cypress-multi-reporters',
  // reporterOptions: {
  //   configFile: 'reporter-config.json',
  // },
  env: {
    allure: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
    },
    defaultCommandTimeout: 20000,
    baseUrl: 'https://etherscan.io/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
