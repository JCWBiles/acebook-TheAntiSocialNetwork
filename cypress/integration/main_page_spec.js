describe('Profile Page', function() {
  it('has a title', function() {
    cy.visit('/main');
    cy.get('.body').should('contain', 'Anti-Social Network');
  });
});
