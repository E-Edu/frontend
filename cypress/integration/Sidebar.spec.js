describe('Sidebar linking test', () => {
    it('Should link to tasks', () => {
        cy.visit('/dashboard')
            .get('.menu-element').eq(1).click()
            .url().should('include', '/task/lecture');
    });
    it('Should link to home', () => {
        cy.get('.menu-element').eq(0).click()
            .url().should('include', '/dashboard');
    });
    it('Should link to new task', () => {
        cy.get('.menu-element').eq(2).click()
            .url().should('include', '/dashboard');
    });
    it('Should link to my tasks', () => {
        cy.get('.menu-element').eq(3).click()
            .url().should('include', '/task/list');
    });
    it('Should link to correction', () => {
        cy.get('.menu-element').eq(4).click()
            .url().should('include', '/correction/review');
    });
    it('Should link to reports', () => {
        cy.get('.menu-element').eq(5).click()
            .url().should('include', '/reports/list');
    });
    it('Should link to add teacher', () => {
        cy.get('.menu-element').eq(6).click()
            .url().should('include', '/teacher/add');
    });
    it('Should link to settings', () => {
        cy.get('.menu-element').eq(7).click()
            .url().should('include', '/settings');
    });
    it('Should link to profile', () => {
        cy.get('.menu-element').eq(8).click()
            .url().should('include', '/profile');
    });
});
