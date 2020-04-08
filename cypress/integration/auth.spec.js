describe('Login and registration test', () => {
    it('Should login', () => {
        cy.visit('/');
        cy.get('.btn-login').click();
        cy.url().should('include', '/dashboard');
    });
    it('Should register', () => {
        cy.visit('/');
        cy.get('.btn-register').click();
        cy.url().should('include', '/dashboard');
    });
    it('Should logout', () => {
        cy.get('.btn-logout').click();
        cy.url().should('include', '/');
    });
});
