describe('Probando los comandos del carousel en la pagina principal',() =>{
    it('commanders button', () =>{
        cy.visit('www.pallet305.com')

        cy.get('.active > .row > .card-img')
        cy.get('.carousel-control-next-icon').click()
        cy.wait(500)
        cy.get('[aria-label="Slide 2"]')
        cy.get('.carousel-control-next-icon').click()
        cy.wait(500)
        cy.get('[aria-label="Slide 3"]')


    })
})