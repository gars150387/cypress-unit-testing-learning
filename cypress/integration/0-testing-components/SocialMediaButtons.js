describe('Testing Social Media Buttons', () =>{
    it('Testing navigation of the buttons', () =>{
        cy.visit('www.pallet305.com')
        cy.wait(300)
        cy.get('#responsive-navbar-nav > div:nth-child(2) > a:nth-child(1)')
        .should('have.prop', 'href', 'https://www.facebook.com/Pallet305')

        cy.wait(300)
        cy.get('#responsive-navbar-nav > div:nth-child(2) > a:nth-child(2)')
        .should('have.prop', 'href', 'https://www.instagram.com/pallet_305/')

        cy.wait(300)
        cy.get('#responsive-navbar-nav > div:nth-child(2) > a:nth-child(3)')
        .should('have.prop', 'href', 'https://www.tiktok.com/@pallet305?lang=en')
        .click()

    })
})