const { defineConfig } = require('cypress');

module.exports = defineConfig({
  fixturesFolder: false,
  defaultCommandTimeout: 8000,
  e2e: {
    supportFile: false,
    baseUrl: 'http://localhost:3000',
  },
});
