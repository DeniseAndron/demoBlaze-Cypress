const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeightL: 1080,
  viewportWidth: 1920,
  video:false,
  env:{
    username: 'denisaautomation',
    password: 'Welcome123',
    apiURL: 'https://api.demoblaze.com'
  },
  e2e: {
    
      specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  }
})
