/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

// const fs = require('fs-extra');
// const path = require('path');

// function getConfigurationByFile(file) {
//   const pathToConfigFile = path.resolve(
//     '..',
//     'Cypress-env-configs/cypress/config-files',
//     `${file}.json`
//   );

//   return fs.readJson(pathToConfigFile);
// }

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // const file = config.env.fileConfig || 'development';

  // return getConfigurationByFile(file);

}