describe('footer links test', () => {
    it('should show imprint', () => {
        cy.visit('/')
            .get('.imprint-link').click()
            .url().should('include', '/imprint');
    });
    it('should show privacy', () => {
        cy.visit('/')
            .get('.privacy-link').click()
            .url().should('include', '/privacy');
    });
    it('should show credits', () => {
        cy.visit('/')
            .get('.credits-link').click()
            .url().should('include', '/credits');
    });
});
