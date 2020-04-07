describe('Dashboard Test', () => {
    it('Click on Subjects', () => {
        cy.visit('/dashboard');
        cy.get('.subject').click({ multiple: true });
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
