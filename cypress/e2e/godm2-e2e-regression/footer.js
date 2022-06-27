import '../../support/commands'

describe('REG_Footer', function () {

    beforeEach(function () {
        cy.fixture('footer.json').then(function (data) {
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


    it('Account - Register Account', function () {

        //Register customer
        cy.visit("customer/account/create/", {
            // auth: {
            //     username: this.config.basicAuthUsername,
            //     password: this.config.basicAuthPassword,
            // }
        })
        cy.title().should('eq', "Create New Customer Account")

        cy.get(this.accountData.txtFirstname)
            .type(this.accountData.firstname)
        cy.get(this.accountData.txtLastname)
            .type(this.accountData.lastname)
        
        //Sign Up for Newsletter checkbox
        cy.get(this.accountData.chkNewsletter)
            .check()
            .should('be.checked')
        
        //Allow remote shopping assistance checkbox
        cy.get(this.accountData.chkRemote).check()

        //Email and Password
        const randomnum = () => Cypress._.random(0, 1e7)
        const id = randomnum()
        cy.log(id);
        cy.wrap(id).as('id')
        const newemail = (this.accountData.emailPrefix + id + this.accountData.emailSuffix)
        cy.wrap(newemail).as('newemail')

        cy.get(this.accountData.txtEmail)
            .type(newemail)
        cy.get(this.accountData.txtPassword)
            .type(this.accountData.password)
        cy.get(this.accountData.txtPasswordC)
            .type(this.accountData.password)
        cy.get(this.accountData.btnSubmit)
            .click()
        // cy.get(this.accountData.msgSuccess)
        //     .should('be.visible')
        //cy.screenshot("Successful registration")

    })
    //Update Account Name, Email
    it('Account - Update account details', function () {
        
        cy.get(this.accountData.txtSearch, { timeout: 10000 }).should('be.visible');
        cy.visit("customer/account/login", {
            // auth: {
            //     username: this.accountData.basicAuthUsername,
            //     password: this.accountData.basicAuthPassword,
            // }
        })
        
        //Login
        cy.get(this.accountData.txtEmailLogin)
            .clear()
            .should('be.empty')
            .type(this.newemail)

        cy.get(this.accountData.txtPassLogin)
            .clear()
            .should('be.empty')
            .type(this.accountData.password)

        cy.get(this.accountData.btnLogin)
            .click()
        
        //Update Account Name, Email
        cy.get(this.accountData.tabAccountInfo)
            .should('be.visible')
            .click()
        cy.get(this.accountData.editAccInfoTitle)
            .should('be.visible')
        cy.get(this.accountData.chkChangeEmail)
            .click()
        cy.get(this.accountData.txtFirstname)
            .clear()
            .should('be.empty')
            .type(this.accountData.lastname)
        cy.get(this.accountData.txtLastname)
            .clear()
            .should('be.empty')
            .type(this.accountData.firstname)
        cy.get(this.accountData.txtEmailLogin)
            .clear()
            .should('be.empty')
            .type(this.accountData.emailPrefix + "edited" + this.id + this.accountData.emailSuffix)
        //.type(this.accountData.emailPrefix + "edited" + id + this.accountData.emailSuffix)
        cy.get(this.accountData.txtCurrentPass)
            .type(this.accountData.password)
        cy.get(this.accountData.btnSave)
            .click()
        // cy.get(this.accountData.msgSuccess)
        //     .should('be.visible')
        cy.screenshot("Updated account details")

        // Verify updated details
        cy.get(this.accountData.tabAccountInfo)
            .click()
        cy.get(this.accountData.editAccInfoTitle)
            .should('be.visible')
        cy.get(this.accountData.chkChangeEmail)
            .click()
        cy.get(this.accountData.txtFirstname)
            .should('have.value', this.accountData.lastname)
        cy.log('First name was udpated correctly')
        cy.get(this.accountData.txtLastname)
            .should('have.value', this.accountData.firstname)
        cy.log('Last name was udpated correctly')
        cy.get(this.accountData.txtEmailLogin)
            .should('have.value', this.accountData.emailPrefix + "edited" + this.id + this.accountData.emailSuffix)
        //.should('have.value', this.accountData.emailPrefix + "edited" + id + this.accountData.emailSuffix)
        cy.log('Email was udpated correctly')
        cy.screenshot("Account details were successfully updated")
        cy.get(this.accountData.txtEmailLogin)
            .clear()
            .should('be.empty')
            .type(this.newemail)
        //.type(newemail)
        cy.get(this.accountData.txtCurrentPass)
            .type(this.accountData.password)
        cy.get(this.accountData.btnSave)
            .click()
        // cy.get(this.accountData.msgSuccess)
        //     .should('be.visible')

        //Update Newsletter
        cy.get(this.accountData.newsletterEdit)
            .click()
        cy.get(this.accountData.chkNewsletterAccount)
            .uncheck()
            .should('not.be.checked')
        cy.get(this.accountData.btnSave)
            .click()
        // cy.get(this.accountData.msgSuccess)
        //     .should('be.visible')
        cy.screenshot("Updated newsletter subscription (Unchecked)")
        cy.get(this.accountData.newsletterEdit)
            .click()
        cy.get(this.accountData.chkNewsletterAccount)
            .check()
            .should('be.checked')
        cy.get(this.accountData.btnSave)
            .click()
        // cy.get(this.accountData.msgSuccess)
        //     .should('be.visible')
        cy.screenshot("Updated newsletter subscription (Checked)")

        //Add/Update Address
        cy.get(this.accountData.tabAddress)
            .click()
        cy.contains('Add New Address').should('be.visible')
        cy.get(this.accountData.txtPhone)
            .type(this.accountData.phone)
        cy.get(this.accountData.txtStreetAdd1)
            .type(this.accountData.streetaddress1)
        cy.get(this.accountData.txtStreetAdd2)
            .type(this.accountData.streetaddress2)
        cy.get(this.accountData.txtSuburb)
            .type(this.accountData.suburb)
        cy.get(this.accountData.drpState)
            .select(this.accountData.stateInitials)
        cy.get(this.accountData.txtPost)
            .type(this.accountData.post)
        cy.get(this.accountData.drpCountry)
            .select(this.accountData.country)
        cy.get(this.accountData.btnSave)
            .click()

        //View Orders
        cy.get(this.accountData.tabOrders)
            .click()
        cy.contains('You have placed no orders.').should('be.visible')

        //View Wishlists
        cy.get(this.accountData.tabWishlist)
            .click()
        cy.contains('You have no items in your wish list.').should('be.visible')
    })

    //Test login validation (using wrong credentials)
    it('Account - Login validation', function () {
        cy.get(this.accountData.txtSearch, { timeout: 10000 }).should('be.visible');
        cy.visit("customer/account/login", {
            auth: {
                username: this.accountData.basicAuthUsername,
                password: this.accountData.basicAuthPassword,
            }
        })
        cy.title().should('eq', "Customer Login")
        //Test login validation (using wrong credentials)
        cy.get(this.accountData.txtEmailLogin)
            .type(this.newemail)
        //.type(newemail)
        cy.get(this.accountData.txtPassLogin)
            .type(this.accountData.invalidPassword)
        cy.get(this.accountData.btnLogin)
            .click()
        //Verify error message is displayed    
        // cy.get(this.accountData.msgInvalidCredentials)
        //     .should('be.visible')
        cy.screenshot("Error for invalid credentials")
    })

    it('Account - Login', function () {
        cy.visit("customer/account/login", {
            auth: {
                username: this.config.basicAuthUsername,
                password: this.config.basicAuthPassword,
            }
        })
        cy.title().should('eq', "Customer Login")
        cy.login(this.newemail,this.accountData.password)
    })

    // it('Account - Login', function () {
    //     //Login
    //     cy.visit("customer/account/login", {
    //         auth: {
    //             username: this.config.basicAuthUsername,
    //             password: this.config.basicAuthPassword,
    //         }
    //     })
    //     cy.get(this.accountData.txtEmailLogin)
    //         .clear()
    //         .should('be.empty')
    //         .type(this.newemail)
    //     //.type(newemail)

    //     cy.get(this.accountData.txtPassLogin)
    //         .clear()
    //         .should('be.empty')
    //         .type(this.accountData.password)
    //     cy.get(this.accountData.btnLogin)
    //         .click()

    //     //Customer successfully logs in
    //     // Remove comment once issue is resolved 
    //     //cy.contains(this.accountData.msgSuccessfulLogin).should('be.visible')
    //     //cy.screenshot("Successful login and redirection to My account dashboard")
    //     //cy.url()
    //     //  .should('eq', this.config.baseUrl + 'customer/account/')

    // })

    it('Account - Logout', function () {
        //Logout function
        cy.get(this.accountData.btnAccountHeader)
            .click()
        cy.get(this.accountData.btnLogout)
            .click()
        //cy.contains('You are signed out').should('be.visible')
        cy.screenshot("Successful logout")
        cy.verifyURL('https://mcstaging.godfreys.com.au/customer/account/logoutSuccess/')
        
    })
})
