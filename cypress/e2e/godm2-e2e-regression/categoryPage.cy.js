describe('REG_CategoryPage', () => {

    beforeEach(function () {
        cy.fixture('categoryPage.json').then(function (data) {
            this.catData = data
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

    it('PLP - Navigate to PLP', function () {

        cy.visit("vacuum-cleaners/vacuum-cleaner-types/bagless", {
            auth: {
                username: this.config.basicAuthUsername,
                password: this.config.basicAuthPassword,
            }
        })
// CY URL VALIDATION
        cy.title().should('eq', 'Bagless Vacuum Cleaners | Godfreys')
    })

    it('PLP - Product name, price and image display', function () {
        cy.get(this.catData.productName).should('be.visible')
        cy.get(this.catData.productPrice).should('be.visible')
        cy.get(this.catData.productImage).should('be.visible')
        
    })

    it('PLP - Verify sort via price', function () {
       
        cy.visit("vacuum-cleaners/vacuum-cleaner-types/bagless", {
            auth: {
                username: this.config.basicAuthUsername,
                password: this.config.basicAuthPassword,
            }
        })

        cy.get(this.catData.firstProduct)
            .should('be.visible')

        cy.get('#sorter')
            .select('Price')

        cy.get(this.catData.thirdProduct)
            .invoke('text')
            .then((thirdPrice) => {
                const start = thirdPrice.indexOf('$')
                cy.log(thirdPrice.slice(start + 1))
                const price3 = thirdPrice.slice(start + 1)
                cy.wrap(price3).then(parseFloat).as('price3')

            })

        cy.get(this.catData.secondProduct)
            .invoke('text')
            .then((secondPrice) => {
                const start = secondPrice.indexOf('$')
                cy.log(secondPrice.slice(start + 1))
                const price2 = secondPrice.slice(start + 1)
                cy.wrap(price2).then(parseFloat).should('be.lessThan', this.price3).as('price2')

            })

        cy.get(this.catData.firstProduct)
            .invoke('text')
            .then((firstPrice) => {
                const start = firstPrice.indexOf('$')
                cy.log(firstPrice.slice(start + 1))
                const price1 = firstPrice.slice(start + 1)
                cy.wrap(price1).then(parseFloat).should('be.lessThan', this.price2).as('price1')

            })
    })

    
})
