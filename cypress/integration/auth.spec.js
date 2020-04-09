describe('login and registration test', () => {
    it('should login', () => {
        cy.visit('/')
            .get('.btn-login').click()
            .url().should('include', '/dashboard');
    });
    it('should register', () => {
        cy.visit('/')
            .get('.btn-register').click()
            .url().should('include', '/dashboard');
    });
    it('should logout', () => {
        cy.get('.btn-logout').click()
            .url().should('include', '/');
    });
});
