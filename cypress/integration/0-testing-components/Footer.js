describe( ' Testing the button of the Footer component', () =>{
    it('navigation button', () =>{
        cy.visit('www.pallet305.com')
        cy.wait(1500)
        
        cy.get('#root > div > container > div.footer > div.mt-2.container-fluid > nav')
        cy.wait(1500)

        cy.get('[href="/about"] > h5').click()
        cy.wait(1500)

        cy.get('[href="/design"] > h5').click()
        cy.wait(1500)

        cy.get('[href="/contact"] > h5').click()
        cy.wait(1500)

        cy.get('[href="/customer"] > h5').click()
        cy.wait(1500)
        cy.get('[href="/"] > h5').click()
    })
})