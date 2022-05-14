describe( ' My first Test', function() {
    it('Find an element', function(){
        //Steps to create a tets in cypress
        //Arrange - setup initial app state
        //1- visit a web page
        //2- query for an element
        //Act - take an action
        //1-interact with that element
        //Assert - make an assertion 
        //1-make an assertion about the page content
        cy.visit('https://www.pallet305.com')
        cy.wait(1500)

        cy.contains('About').click()
        cy.url().should('include', '/about')
        cy.get('.icon-position > path').click()
        cy.wait(1500)

        cy.contains('Projects').click()
        cy.url().should('include', '/design') 
        cy.wait(1500)
        cy.scrollTo(1050,1050)
        cy.wait(1500)
        cy.get('.icon-position').should('be.visible').click()     
        cy.wait(1500)

        cy.contains('Contact Us').click()
        cy.url().should('include', '/contact')
        cy.wait(1500)

        cy.contains('Home').click()
        cy.url().should('include', '/')
        cy.wait(1500)

        cy.contains('Our Customers').click()
        cy.url().should('include', '/customer')
        cy.wait(1500)

        cy.get('#logo').click()
        cy.url().should('include', '/')
        
    })
})