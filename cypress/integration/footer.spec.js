describe('Footer links test', () => {
    it('Should show imprint', () => {
        cy.visit('/')
            .get('.imprint-link').click()
            .url().should('include', '/imprint');
    });
    it('Should show privacy', () => {
        cy.visit('/')
            .get('.privacy-link').click()
            .url().should('include', '/privacy');
    });
    it('Should show credits', () => {
        cy.visit('/')
            .get('.credits-link').click()
            .url().should('include', '/credits');
    });
});
