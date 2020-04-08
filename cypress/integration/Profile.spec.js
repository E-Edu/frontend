describe('Profile test', () => {
    it('Should edit profile name', () => {
        cy.visit('/profile')
            .get('span[role=button')
            .first()
            .click()
            .get('.username-input')
            .clear()
            .type('username')
            .get('.username-input')
            .should('have.value', 'username');
    });
});
