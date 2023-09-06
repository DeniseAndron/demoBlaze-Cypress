const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },

  viewportHeightL: 1080,
  viewportWidth: 1920,
  video:false,
  env:{
    username: 'denisaautomation',
    password: 'Welcome123',
    apiURL: 'https://api.demoblaze.com'
  },
  retries: {
    runMode: 2,
    openMode: 0
  },
  e2e: {
    
      specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  },
  
  
})
