describe('Petstore Testing', () => {
    it('Visits PetStore', () => {
        cy.visit('/')
        cy.get('.title').should('have.text', "Failed to load API definition.")
        cy.get('.download-url-input').type("{selectall}http://localhost:8001/api/swagger.json")
        cy.get('.download-url-button').click()
        cy.get('.title').should('contain.text', "Swagger Petstore")
    })
})
