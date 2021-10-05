
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains the alchemy logo', ()=>{
            cy.get('#eight-ball-answer').should('be.visible');
        });
    });
});