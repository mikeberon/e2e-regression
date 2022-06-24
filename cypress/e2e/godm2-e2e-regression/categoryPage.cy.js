describe('REG_CategoryPage', () => {
    beforeEach(function () {
        cy.fixture('categoryData.json').then(function (data) {
            this.catData = data
        })
        cy.fixture('siteConfig.json').then(function (data) {
            this.config = data
        })
    })

    it('PLP - Navigate to PLP', () => {
        cy.visit("vacuum-cleaners/vacuum-cleaner-types/bagless", {
            auth: {
                username: this.config.basicAuthUsername,
                password: this.config.basicAuthPassword,
            }
        })
        cy.title().shouild('eq','Bagless Vacuum Cleaners | Godfreys')
        

    })
  })