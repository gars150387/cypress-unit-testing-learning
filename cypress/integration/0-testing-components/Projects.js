describe('Testing Project component', () =>{
    it('Navbar and its funcionality', () =>{
        cy.visit('www.pallet305.com')
        cy.contains('Projects').click()
        cy.scrollTo('top')
        cy.get(':nth-child(1) > #button').should('be.visible').should('to.be.enabled')
        cy.wait(500)

        cy.get(':nth-child(2) > #button').should('be.visible').should('to.be.enabled').click({force:true})
        cy.wait(500)
        
        cy.get(':nth-child(3) > #button').should('be.visible').should('to.be.enabled').click({force:true})
        cy.wait(500)
        
        cy.get(':nth-child(4) > #button').should('be.visible').should('to.be.enabled').click({force:true})
        cy.wait(500)
        
        cy.scrollTo('bottom')
        cy.get('.icon-position').click()
    })
})