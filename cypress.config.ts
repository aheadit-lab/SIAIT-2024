const browserify = require('@cypress/browserify-preprocessor')
const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require('cypress');


export default defineConfig({


  chromeWebSecurity: false,
  screenshotOnRunFailure: false,
  video: false,

  env: {
    baseUrl: "http://siait.aheadit-lab.com:44309/#/login",
  },

  retries: {
    runMode: 0,
    openMode: 0,
  },
  pageLoadTimeout: 30000,
  defaultCommandTimeout: 15000,
  taskTimeout: 30000,
  e2e: {

    setupNodeEvents(on, config) {

      const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve('typescript'),
      };

      on('file:preprocessor', cucumber(options));

      return require('./cypress/plugins/index.js')(on, config)
    },

    specPattern: 'cypress/e2e/**/*.{feature,features}' || 'cypress/e2e/common/*.common.ts',
    supportFile: "cypress/support/e2e.js"
  },


});


