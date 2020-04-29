describe('doing tasks test', () => {
    beforeEach(() => {
        cy.visit('/dashboard');
    });

    it('should open german subject', () => {
        cy.get('.subject').eq(0).click()
            .url().should('include', '/task/lecture')
            .get('.lecture-subject').should('contain', 'Mathe')
            .get('.lecture-subject').eq(1).click()
            .url().should('include', '/task/list')
            .get('.task').first().click()
            .url().should('include', '/task/subject')
            .get('input[placeholder=test]').type('Answer')
            .get('.subject-task-next').click()
            .url().should('include', '/task/result')
            .visit('/task/subject')
            .get('.subject-task-skip').click()
            .url().should('include', '/task/result');
    });

    it('should open computer sience subject', () => {
        cy.get('.subject').eq(1).click()
            .url().should('include', '/task/lecture')
            .get('.lecture-subject').should('contain', 'Mathe')
            .get('.lecture-subject').eq(1).click()
            .url().should('include', '/task/list')
            .get('.task').first().click()
            .url().should('include', '/task/subject')
            .get('input[placeholder=test]').type('Answer')
            .get('.subject-task-next').click()
            .url().should('include', '/task/result')
            .visit('/task/subject')
            .get('.subject-task-skip').click()
            .url().should('include', '/task/result');
    });

    it('should open history subject', () => {
        cy.get('.subject').eq(2).click()
            .url().should('include', '/task/lecture')
            .get('.lecture-subject').should('contain', 'Mathe')
            .get('.lecture-subject').eq(1).click()
            .url().should('include', '/task/list')
            .get('.task').first().click()
            .url().should('include', '/task/subject')
            .get('input[placeholder=test]').type('Answer')
            .get('.subject-task-next').click()
            .url().should('include', '/task/result')
            .visit('/task/subject')
            .get('.subject-task-skip').click()
            .url().should('include', '/task/result');
    });

    it('should open politics subject', () => {
        cy.get('.subject').eq(3).click()
            .url().should('include', '/task/lecture')
            .get('.lecture-subject').should('contain', 'Mathe')
            .get('.lecture-subject').eq(1).click()
            .url().should('include', '/task/list')
            .get('.task').first().click()
            .url().should('include', '/task/subject')
            .get('input[placeholder=test]').type('Answer')
            .get('.subject-task-next').click()
            .url().should('include', '/task/result')
            .visit('/task/subject')
            .get('.subject-task-skip').click()
            .url().should('include', '/task/result');
    });

    it('should open physics subject', () => {
        cy.get('.subject').eq(4).click()
            .url().should('include', '/task/lecture')
            .get('.lecture-subject').should('contain', 'Mathe')
            .get('.lecture-subject').eq(1).click()
            .url().should('include', '/task/list')
            .get('.task').first().click()
            .url().should('include', '/task/subject')
            .get('input[placeholder=test]').type('Answer')
            .get('.subject-task-next').click()
            .url().should('include', '/task/result')
            .visit('/task/subject')
            .get('.subject-task-skip').click()
            .url().should('include', '/task/result');
    });

    it('should open biology subject', () => {
        cy.get('.subject').eq(5).click()
            .url().should('include', '/task/lecture')
            .get('.lecture-subject').should('contain', 'Mathe')
            .get('.lecture-subject').eq(1).click()
            .url().should('include', '/task/list')
            .get('.task').first().click()
            .url().should('include', '/task/subject')
            .get('input[placeholder=test]').type('Answer')
            .get('.subject-task-next').click()
            .url().should('include', '/task/result')
            .visit('/task/subject')
            .get('.subject-task-skip').click()
            .url().should('include', '/task/result');
    });

    it('should open chemistry subject', () => {
        cy.get('.subject').eq(6).click()
            .url().should('include', '/task/lecture')
            .get('.lecture-subject').should('contain', 'Mathe')
            .get('.lecture-subject').eq(1).click()
            .url().should('include', '/task/list')
            .get('.task').first().click()
            .url().should('include', '/task/subject')
            .get('input[placeholder=test]').type('Answer')
            .get('.subject-task-next').click()
            .url().should('include', '/task/result')
            .visit('/task/subject')
            .get('.subject-task-skip').click()
            .url().should('include', '/task/result');
    });
});
