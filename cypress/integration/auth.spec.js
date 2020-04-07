describe('Login and registration test', () => {
    it('Login', () => {
        cy.visit('/');
        cy.get('.btn-login').click();
        cy.url().should('include', '/dashboard');
    });
    it('Register', () => {
        cy.visit('/');
        cy.get('.btn-register').click();
        cy.url().should('include', '/dashboard');
    });
    it('Logout', () => {
        cy.get('.btn-logout').click();
        cy.url().should('include', '/');
    });
});
