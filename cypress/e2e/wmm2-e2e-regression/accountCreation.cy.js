describe('REG_AccountCreation', function () {

//  Regression Test Scope: Account Creation, Login and Logout
//      1. User able to login/logout a valid registered account
//      2. User is redirected to My Account Dashboard upon login
//      3. User is redirected to Homepage upon logout
//      4. Error validation is working for invalid inputs

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


    it('Register and login', function () {


        //Register customer
        cy.visit("customer/account/create/", {
            auth: {
                username: this.config.basicAuthUsername,
                password: this.config.basicAuthPassword,
            }
        })
        cy.get('#firstname')
            .type(this.accountData.firstname)
        cy.get('#lastname')
            .type(this.accountData.lastname)
        //Sign Up for Newsletter checkbox
        cy.get('#is_subscribed').check()
        //Allow remote shopping assistance checkbox
        cy.get('#assistance_allowed_checkbox').check()

        //Address Information
        // cy.get('#company')
        //     .type(this.accountData.company)
        // cy.get('#telephone')
        //     .type(this.accountData.phone)
        // cy.get('#street_1')
        //     .type(this.accountData.streetaddress1)
        // cy.get('#street_2')
        //     .type(this.accountData.streetaddress2)
        // cy.get('#city')
        //     .type(this.accountData.city)
        // cy.get('#region_id').select(this.accountData.state)
        // cy.get('#zip')
        //     .type(this.accountData.postcode)
        // cy.get('#country').select(this.accountData.country)

        //Email and Password
        const randomnum = () => Cypress._.random(0, 1e7)
        const id = randomnum()
        cy.log(id);
        const newemail = ("mike.beron+" + id + "@acidgreen.com.au")

        cy.get('#email_address')
            .type(newemail)
        cy.get('#password')
            .type(this.accountData.password)
        cy.get('#password-confirmation')
            .type(this.accountData.password)
        cy.get('button.action.submit.primary')
            .click()
        cy.get('div.message-success.success.message')
            .should('be.visible')

        //Logout function
        cy.get('span.action.switch')
            .click()
        cy.get('li.link.authorization-link')
            .click()
        cy.get('#search', { timeout: 10000 }).should('be.visible');

        //Login function
        cy.visit("customer/account/login", {
            auth: {
                username: this.accountData.basicAuthUsername,
                password: this.accountData.basicAuthPassword,
            }
        })
        //Test login validation (using wrong credentials)
        cy.get('#email')
            .type(newemail)
        cy.get('#pass')
            .type(this.accountData.invalidPassword)
        cy.get('button.action.login.primary')
            .click()
        //Verify error message is displayed    
        cy.get('div.message-error.error.message')
            .should('be.visible')
        cy.get('#pass')
            .clear()
            .should('be.empty')
            .type(this.accountData.password)
        cy.get('button.action.login.primary')
            .click()
        cy.visit("customer/account/", {
            auth: {
                username: this.config.basicAuthUsername,
                password: this.config.basicAuthPassword,
            }
        })

        //Customer successfully logs in
        cy.get('span[data-ui-id="page-title-wrapper"]')
        cy.url()
            .should('eq', this.config.baseUrl + 'customer/account/')

    })
})


