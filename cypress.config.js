const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeightL: 1080,
  viewportWidth: 1920,
  e2e: {
    
      specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  }
})
