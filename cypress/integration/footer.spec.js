describe('Footer links test', () => {
    it('Should show imprint', () => {
        cy.visit('/');
        cy.get('.imprint-link').click();
        cy.url().should('include', '/imprint');
    });
    it('Should show privacy', () => {
        cy.visit('/');
        cy.get('.privacy-link').click();
        cy.url().should('include', '/privacy');
    });
    it('Should show credits', () => {
        cy.visit('/');
        cy.get('.credits-link').click();
        cy.url().should('include', '/credits');
    });
});
