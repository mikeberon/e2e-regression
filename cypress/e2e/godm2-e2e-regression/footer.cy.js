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
        
        //Vacuum Cleaners

        //Bagless Vacuums
        cy.clickFooter(this.footerData.baglessVacuums,"Bagless Vacuum Cleaners | Godfreys")
        //Bagged Vacuums
        cy.clickFooter(this.footerData.baggedVacuums, "Bagged Vacuum Cleaners | Godfreys")
        //Stick Vacuums
        cy.clickFooter(this.footerData.stickVacuums, "Stick Vacuum Cleaners | Cordless Stick Vacuums | Godfreys")
        //Robot Vacuums
        cy.clickFooter(this.footerData.robotVacuums,"Robot Vacuums | Robot Vacuum Cleaners | Godfreys")
        //Upright Vacuums
        cy.clickFooter(this.footerData.uprightVacuums,"Upright Vacuum Cleaners | Upright Vacuums | Godfreys")
        //Handheld Vacuums
        cy.clickFooter(this.footerData.handheldVacuums,"Handheld Vacuums | Handheld Vacuum Cleaners | Godfreys")
        //Wet And Dry Vacuums
        cy.clickFooter(this.footerData.wetAndDryVacuums,"Home & Industrial Wet and Dry Vacuum Cleaners | Godfreys")
        //Commercial Vacuums
        cy.clickFooter(this.footerData.commercialVacuums,"Commercial & Industrial Vacuum Cleaners | Commercial Vacuums")
        
        //Steam & Shampoo Cleaning

        //Carpet Shampooers
        cy.clickFooter(this.footerData.carpetShampooers,"Carpet Shampooers | Carpet Cleaner Vacuums | Godfreys")
        //Hard Floor Cleaners 
        cy.clickFooter(this.footerData.hardFloorCleaners,"Floor Cleaners | Wood Floor Cleaners | Godfreys")
        //Steam Mops
        cy.clickFooter(this.footerData.steamMops,"Steam Mops | Bissell Steam Mops | Godfreys")
        //Steam Cleaner
        cy.clickFooter(this.footerData.steamCleaners,"Steam Cleaners | Carpet Steam Cleaners | Godfreys")

        //Search Tools

        //VacFinder
        cy.clickFooter(this.footerData.vacFinder,"Machine Finder")
        //AccessoryFinder 
        cy.clickFooter(this.footerData.accessoryFinder,"Vacuum Cleaner Accessories | Godfreys")
        
        //Finance
        
        //AfterPay
        cy.clickFooter(this.footerData.afterPay,"AfterPay")
        //Humm
        cy.clickFooter(this.footerData.humm,"Buy Now and Pay Later with Humm")
        //OpenPay
        cy.clickFooter(this.footerData.openPay,"OpenPay")
        cy.visit("/godfreys-now-accepts-humm")
        /*
        //KlarnFAQs
        cy.clickFooter(this.footerData.klarnaFAQs,"Klarna FAQ")
        //Klarna Terms and Conditions
        cy.clickFooter(this.footerData.klarnaTermsAndConditions,"Terms and Conditions")
        cy.visit("/")
        //Klarna Privacy Policy
        cy.clickFooter(this.footerData.klarnaPrivacyPolicy,"Klarna: Klarna’s Privacy Policy")
        cy.visit("/")
        */
       
        //About the Site
        //Click and Collect
        cy.clickFooter(this.footerData.clickAndCollect,"Click & Collect at Godfreys")
        //The Dirt
        cy.clickFooter(this.footerData.theDirt,"Blog and Expert Advice")
        //Allergy Aware
        cy.clickFooter(this.footerData.allergyAware,"Godfreys Allergy Aware |Cleaning Solutions Recommended For A")

        //Corporate
        //About Us
        cy.clickFooter(this.footerData.aboutUs,"About Us")
        //Company Overview
        cy.clickFooter(this.footerData.companyOverview,"Company Overview")

        //Godfreys Careers
        //Career Opportunities
        cy.clickFooter(this.footerData.careerOpportunities,"Career Opportunities")

        //Customer Service
        //Contact Us
        cy.clickFooter(this.footerData.contactUs,"Godfreys Customer Service | Contact Us")
        //Find A Gofreys' Store
        cy.visit("/career-opportunities")
        cy.clickFooter(this.footerData.findAGofreysStore,"Store Locator – Please note, store trading hours may vary due to unexpected store closures")
        //Terms and Conditions
        cy.clickFooter(this.footerData.termsAndConditions,"Terms & Conditions")
        //Delivery Information
        cy.clickFooter(this.footerData.deliveryInformation,"Delivery Information")
        //Vacuums Repairs and Service
        cy.clickFooter(this.footerData.vacuumsRepairsAndService,"Vacuum Servicing and Repairs")
        //Privacy Policy (new tab)
        //Privacy Notice (new tab)
        //Trade In Discounts
        cy.clickFooter(this.footerData.tradeInDiscounts,"Trade In Your Old Vacuum & Save")
        //Product Safety Recalls
        cy.clickFooter(this.footerData.productSafetyRecalls,"Product Safety Recall Information")
        
        //Contact Us
        //Email Us
        cy.clickFooter(this.footerData.emailUs,"Godfreys Customer Service | Contact Us")











    })
})



