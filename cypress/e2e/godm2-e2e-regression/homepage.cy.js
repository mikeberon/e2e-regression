import '../../support/commands'

describe('REG_Homepage', () => {

    beforeEach(function () {
        cy.fixture('homepage.json').then(function (data) {
            this.homepage = data
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

    it('Homepage - Navigation', function () {
        cy.visitSite("/","Godfreys | Australia's Vacuum and Cleaning Specialists")
    })

    it('Homepage - Page elements', function () {
        cy.isVisible(this.homepage.carousel)
        cy.isVisible(this.homepage.carouselOptions)
        cy.isVisible(this.homepage.bestSellerTitle)
        cy.isVisible(this.homepage.bestSeller)
        cy.isVisible(this.homepage.bestSellerOptions)
        cy.isVisible(this.homepage.widgetPLP)
        cy.isVisible(this.homepage.cnc)
        cy.isVisible(this.homepage.vacFinder)
        // cy.get(this.homepage.recentlyViewedTitle).should('be.visible')
        // cy.get(this.homepage.recentlyViewed).should('be.visible')
        cy.isVisible(this.homepage.customerReviewsTitle)
    })

    
   

})
