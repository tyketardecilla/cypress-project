# cypress-project

This is a test project created to automate tests for MyAmasim using [Cypress] and [Node.js].

## Installation

```sh
# install dependencies
$ npm install
```


## Running the framework

### Environments
* production - working URL with valid user credentials
* development
  * dummy URL = https://www.dev-amaysim.com.au (set in /cypress/config/development.json)
  * dummy user credentials (set in /cypress/fixtures/development/userAccount.json)
* staging
  * dummy URL = https://www.staging-amaysim.com.au (set in /cypress/config/staging.json)
  * dummy user credentials (set in /cypress/fixtures/development/userAccount.json)

### Commands
#### Open Cypress UI
Launch Cypress UI to run tests on a specific environment
```sh
$ npm run cy:open:production
```

```sh
$ npm run cy:open:development
```

```sh
$ npm run cy:open:staging
```

#### Run all tests in headless mode
Execute tests from command line to run on a specific environment
```sh
$ npm run cy:run:production
```

```sh
$ npm run cy:run:development
```

```sh
$ npm run cy:run:staging
```

[//]: #
   [Cypress]: <https://www.cypress.io/>
   [Node.js]: <https://nodejs.org/>
