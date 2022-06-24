describe('first test', function () {

    it('Register and login', function () {
        const uuid = () => Cypress._.random(0, 1e7)
        const id = uuid()
        cy.log(id);
    })
})
