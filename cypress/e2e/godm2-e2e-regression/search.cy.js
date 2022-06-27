import '../../support/commands'

describe('REG_Search', () => {

    beforeEach(function () {
        cy.fixture('search.json').then(function (data) {
            this.searchData = data
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

    it('Search - Search suggestions', function () {

        cy.visit("/", {
            auth: {
                username: this.config.basicAuthUsername,
                password: this.config.basicAuthPassword,
            }
        })

        cy.title().should('eq', "Godfreys | Australia's Vacuum and Cleaning Specialists")

        cy.search(this.searchData.product)

        cy.get(this.searchData.suggestion)
            .should('be.visible')

        cy.get(this.searchData.firstSuggestion)
            .click({ force: true })

        cy.url()
            .should('eq', this.searchData.urlPDP)


    })

})
