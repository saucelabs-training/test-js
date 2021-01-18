context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://react-redux.realworld.io/#/login')
    })

    it('enter login credentials', () => {
        cy
            .get('[type="email"]')
            .type('testjssummit@gmail.com')

            .get('[type="password"]')
            .type('password')
            
            .get('button[type="submit"]')
            .click()
        
            .get('.nav-link')
            .should('contain.text', 'testjssummit')
    })
})
