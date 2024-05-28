const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require('@cypress/browserify-preprocessor');

const resolve = require('resolve');

module.exports = (on, config) => {

  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
  };
  
  on('file:preprocessor', cucumber(options));

  
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium' &&  browser.name === 'chrome' && browser.name !== 'electron') {
      console.log('Adding Chrome flag: --disable-dev-shm-usage');
      launchOptions.args.push('--disable-dev-shm-usage');
      console.log('Adding Chrome flag: --incognito');
      launchOptions.args.push('--incognito');
    }
    return launchOptions;
  });

  "use strict";

  return config;

};