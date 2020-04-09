describe('sidebar linking test', () => {
    it('should link to tasks', () => {
        cy.visit('/dashboard')
            .get('.menu-element').eq(1).click()
            .url().should('include', '/task/lecture');
    });
    it('should link to home', () => {
        cy.get('.menu-element').eq(0).click()
            .url().should('include', '/dashboard');
    });
    it('should link to new task', () => {
        cy.get('.menu-element').eq(2).click()
            .url().should('include', '/dashboard');
    });
    it('should link to my tasks', () => {
        cy.get('.menu-element').eq(3).click()
            .url().should('include', '/task/list');
    });
    it('should link to correction', () => {
        cy.get('.menu-element').eq(4).click()
            .url().should('include', '/correction/review');
    });
    it('should link to reports', () => {
        cy.get('.menu-element').eq(5).click()
            .url().should('include', '/reports/list');
    });
    it('should link to add teacher', () => {
        cy.get('.menu-element').eq(6).click()
            .url().should('include', '/teacher/add');
    });
    it('should link to settings', () => {
        cy.get('.menu-element').eq(7).click()
            .url().should('include', '/settings');
    });
    it('should link to profile', () => {
        cy.get('.menu-element').eq(8).click()
            .url().should('include', '/profile');
    });
});
