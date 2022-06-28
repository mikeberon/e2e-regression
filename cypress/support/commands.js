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



Cypress.Commands.add('login', (email, password) => {
    cy.get('#email')
        .clear()
        .should('be.empty')
        .type(email)
    cy.get('#pass')
        .clear()
        .should('be.empty')
        .type(password)
    cy.get('button.action.login.primary').click()
})

Cypress.Commands.add('search', (searchString) => {
    cy.get('#search')
        .clear()
        .should('be.empty')
        .type(searchString)
})

Cypress.Commands.add('verifyURL', (expectedURL) => {
    cy.url()
        .should('eq', expectedURL)
})

Cypress.Commands.add('visitSite', (url, title) => {
    cy.visit(url)
    cy.title().should('eq', title)
})

Cypress.Commands.add('clickFooter', (footer, title) => {
    cy.get(footer).click()
    cy.title().should('eq', title)
})

Cypress.Commands.add('visitWithAuthentication', (url, title, basicUser, basicPass) => {
    cy.visit(url, {
        auth: {
            username: basicUser,
            password: basicPass,
        }
    })
    cy.title().should('eq', title)
})

Cypress.Commands.add('isVisible', (element) => {
    cy.get(element).should('be.visible')
})

