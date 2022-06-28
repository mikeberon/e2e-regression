import '../../support/commands'

describe('REG_Footer', function () {

    beforeEach(function () {
        cy.fixture('footer.json').then(function (data) {
            this.footerData = data
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


    it('Footer validation', function () {

        //Navigate to homepage
        cy.visit("/")
        cy.title().should('eq', "Godfreys | Australia's Vacuum and Cleaning Specialists")

        cy.clickFooter(this.footerData.baglessVacuums,"Bagless Vacuum Cleaners | Godfreys")
        
        
    })
})



