describe('Login and registration test', () => {
    it('Should login', () => {
        cy.visit('/')
            .get('.btn-login').click()
            .url().should('include', '/dashboard');
    });
    it('Should register', () => {
        cy.visit('/')
            .get('.btn-register').click()
            .url().should('include', '/dashboard');
    });
    it('Should logout', () => {
        cy.get('.btn-logout').click()
            .url().should('include', '/');
    });
});
