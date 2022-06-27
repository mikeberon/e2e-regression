import '../../support/commands'

describe('REG_Search', () => {

    beforeEach(function () {
        cy.fixture('accountCreation.json').then(function (data) {
            this.accountData = data
        })
        cy.fixture('siteConfig.json').then(function (data) {
            this.config = data
        })
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })


    it('Sample runner', function () {
        cy.visitSite(this.accountData.registerURL,this.accountData.registerSite,"","")
    })

})
