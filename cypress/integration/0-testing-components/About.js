describe('testing about page', () =>{
    it('watch components', () =>{
        cy.visit('www.pallet305.com')

        cy.contains('About').click()
        cy.url().should('include','/about')
        cy.wait(500)

        // cy.scrollTo('top')
        // cy.wait(500)

        // cy.scrollTo('bottom')
        // cy.wait(500)
        cy.get('.icon-position > path').click()
        cy.wait(500)


        cy.get('.text-about').should('be.visible')
        cy.wait(500)
        cy.get('#root > div > container > div.aboutContainer.container > div:nth-child(2) > div.text-about.col-md-7 > a > h4').should('be.visible').click({force: true})
    })
})