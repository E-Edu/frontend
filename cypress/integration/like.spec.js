describe('liking test', () => {
    xit('should give thumb up', () => {
        cy.visit('/reports/list')
            .get('.thumbs-up').first().click()
            .get('.thumbs-up-value').first().invoke('text').should('contain', '4');
    });
    xit('should give thumb down', () => {
        cy.get('.thumbs-down').first().click()
            .get('.thumbs-down-value').first().invoke('text').should('contain', '179')
            .get('.thumbs-up-value').first().invoke('text').should('contain', '3');
    });
    xit('should reset thumbs', () => {
        cy.get('.thumbs-down').first().click()
            .get('.thumbs-down-value').first().invoke('text').should('contain', '178');
    });
});
