describe('Main Page', function() {
  it('has a title', function() {
    cy.visit('/main');
    cy.get('.body').should('contain', 'Notifications');
  });
});
