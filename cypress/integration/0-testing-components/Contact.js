import 'cypress-plugin-tab'


describe('Contact component', () =>{
    it('typen, tab and click', () =>{
        cy.visit('www.pallet305.com')
        cy.contains('Contact Us').click()

        cy.get('#root > div > container > div.container > div > div > div:nth-child(2) > div > div > form > div > div:nth-child(1) > input')
        .focus()
        .should('be.visible')
        .should('to.be.enabled')
        .type('Gustavo').tab()
        cy.wait(500)
        cy.get(':nth-child(2) > .form-control')        
        .focus()
        .should('be.visible')
        .should('to.be.enabled')
        .type('gar.santeliz@gmail.com')
        cy.wait(500)

        cy.get(':nth-child(3) > .form-control')
        .focus()
        .should('be.visible')
        .should('to.be.enabled')
        .type('testing')
        .tab()
        cy.wait(500)

        cy.get(':nth-child(4) > .form-control')
        .focus()
        .should('be.visible')
        .should('to.be.enabled')
        .type('I am testing my component with cypress and its tab function to jump to the next input')
        .tab()
        cy.wait(500)

        

    })
})