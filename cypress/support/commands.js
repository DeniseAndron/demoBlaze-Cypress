// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />


Cypress.Commands.add('openHomePage', () => {
    cy.visit('https://www.demoblaze.com/')
})

Cypress.Commands.add('validateLink', () => {
    cy.url().should('include','demoblaze') //Assert include -> not equally
    .and('eq', 'https://www.demoblaze.com/') //nequals, needs to be exact
    .and('contain','demo') //contain assert , partial text
    .and('not.contain', 'test') // negative testing
})

Cypress.Commands.add('confirmPopup', (text) => {
        
            cy.on('window:alert', (txt) => {
                expect(txt).to.contains(text)
            })
})
