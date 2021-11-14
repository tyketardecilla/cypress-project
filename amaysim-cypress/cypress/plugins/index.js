/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const fs = require('fs-extra');
const path = require('path');

module.exports = (on, config,) => {
  const getConfigurationByFile = (file) => {
    const pathToConfigFile = path.resolve('cypress/config', `${file}.json`)
    return fs.readJsonSync(pathToConfigFile)
  }
  // default config is for Production environment
  const file = config.env.configFile || 'production'
  return getConfigurationByFile(file)

}