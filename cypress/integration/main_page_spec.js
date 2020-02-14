describe('Profile Page', function() {
  it('has a title', function() {
    cy.visit('/main');
    cy.get('footer').should('contain', 'Anti-Social Network');
  });
});
