describe('REG_Homepage', function () {

    //  Regression Test Scope: Homepage
    //      1. Main image banner is displayed properly - DONE
    //      2. Main image banner is in a carousel (if applicable) - N/A
    //      3. Clicking Main image banner will redirect to correct page - DONE
    //      4. Videos automatically play in carousel banner (if available) - N/A
    //      5. Category Blocks is displayed properly - 
    //      6. Clicking Category Block will redirect to correct page
    //      7. Product carousels is displayed properly
    //      8. Product carousel navigation is working
    //      9. Product carousel element is correct (product name, price, variants)
    //      10. Hovering over products will display quick add to cart sizes (if available)
    //      11. Clicking product from carousel will redirect to correct PDP
    //      12. Content blocks is displayed properly (if available)
    //      13. Reviews section is displayed properly (if available)
    //      14. Instagram section is displayed properly (if available)

    beforeEach(function () {
        cy.fixture('homepage.json').then(function (data) {
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


    it('Homepage regression testing', function () {

        //Main banner is displayed properly

        //Proceed to homepage
        cy.visit("/", {
            auth: {
                username: this.config.basicAuthUsername,
                password: this.config.basicAuthPassword,
            }
        })
        //Click logo
        cy.get('[aria-label="store logo"]')
            .should('be.visible')
            .click()
        //Verify Redirection upon clicking logo         
        cy.url()
            .should('eq', this.config.baseUrl)

        //Category Blocks is displayed properly
        cy.get('')
            .click({force : true})
            cy.get('#ui-id-3')
            .should('be.visible')
            // cy.get('#ui-id-4')
            // .should('be.visible')
            // cy.get('#ui-id-5')
            // .should('be.visible')
            // cy.get('#ui-id-6')
            // .should('be.visible')
            // cy.get('#ui-id-7')
            // .should('be.visible')
            // cy.get('#ui-id-8')
            // .should('be.visible')
            // cy.get('#ui-id-9')
            // .should('be.visible')
            // cy.get('#ui-id-10')
            // .should('be.visible')
            // cy.get('#ui-id-11')
            // .should('be.visible')
            // cy.get('#ui-id-12')
            // .should('be.visible')
            // cy.get('#ui-id-13')
            // .should('be.visible')
            // cy.get('#ui-id-14')
            // .should('be.visible')
            
        cy.url()
        .should('eq', this.config.baseUrl  + 'anchor-mooring')
            





    })

})
