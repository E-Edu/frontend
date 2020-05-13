describe('footer links test', () => {
    it('should show imprint', () => {
        cy.visit('/')
            .get('.imprint-link').click()
            .url().should('include', 'the-morpheus.de');
    });
    it('should show credits', () => {
        cy.visit('/')
            .get('.credits-link').click()
            .url().should('include', '/credits');
    });
});
