describe('Doing tasks Test', () => {
    beforeEach(() => {
        cy.visit('/dashboard');
    });

    it('Should open German subject', () => {
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

    it('Should open Computer Sience subject', () => {
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

    it('Should open History subject', () => {
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

    it('Should open Politics subject', () => {
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

    it('Should open Physics subject', () => {
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

    it('Should open Biology subject', () => {
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

    it('Should open Chemistry subject', () => {
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
