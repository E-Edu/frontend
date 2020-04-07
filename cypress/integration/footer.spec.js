describe('Footer links test', () => {
    it('Imprint', () => {
        cy.visit('/');
        cy.get('.imprint-link').click();
        cy.url().should('include', '/imprint');
    });
    it('Privacy', () => {
        cy.visit('/');
        cy.get('.privacy-link').click();
        cy.url().should('include', '/privacy');
    });
    it('Credits', () => {
        cy.visit('/')
        cy.get('.credits-link').click();
        cy.url().should('include', '/credits');
    });
});
