describe('Petstore Testing', () => {
    it('Visits PetStore', () => {
        let host = Cypress.env('host') || 'http://localhost:8001'
        cy.visit(host + '/')
        cy.get('.title').should('have.text', "Failed to load API definition.")
        cy.get('.download-url-input').type("{selectall}" + host + "/api/swagger.json")
        cy.get('.download-url-button').click()
        cy.get('.title').should('contain.text', "Swagger Petssdtore")
    })
})
