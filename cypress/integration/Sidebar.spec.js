describe('sidebar linking test', () => {
    beforeEach(() => {
        cy.visit('localhost:3000/dashboard');

    });

    it('should link to home', () => {
        cy.get('.menu-element').eq(0).click()
            .url().should('include', '/dashboard');
    });
    it('should link to add new tasks', () => {
        cy.get('.menu-element').eq(1).click()
            .url().should('include', '/task/add');
    });
    it('should link to settings', () => {
        cy.get('.menu-element').eq(2).click()
            .url().should('include', '/settings');
    });
    it('should link to profile', () => {
        cy.get('.menu-element').eq(3).click()
            .url().should('include', '/profile');
    });
});
