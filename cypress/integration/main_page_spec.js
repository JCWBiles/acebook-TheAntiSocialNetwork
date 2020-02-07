describe('Main Page', function() {
  it('has a title', function() {
    cy.visit('/main');
    cy.get('.title').should('contain', 'Welcome');
  });
});