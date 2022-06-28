describe('REG_ProductPage', () => {

    beforeEach(function () {
        cy.fixture('productPage.json').then(function (data) {
            this.pdpData = data
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

    it('PDP - Navigate to PDP', function () {

        cy.visit(this.config.baseUrl + this.pdpData.pdpURL, {
            auth: {
                username: this.config.basicAuthUsername,
                password: this.config.basicAuthPassword,
            }
        })
      
        cy.title().should('eq', this.pdpData.titlePDP)


    })

})
