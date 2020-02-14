describe('Timeline', function() {
  it('can submit posts and view them', function() {
    cy.visit('/posts');
    cy.contains('New post').click();

    cy.get('#new-post-form').find('[type="text"]').type('Hello, world!');
    cy.get('#new-post-form').submit();

    cy.get('.posts').should('contain', 'Hello, world!');
  });

  it('can delete posts', function(){
    cy.visit('/posts');
    cy.get('.posts').should('contain', 'Hello, world!');
    cy.contains('Delete').click();
    cy.url().should('eq', 'http://localhost:3000/posts')
    cy.get('.posts').should('not.contain', 'Hello, world!');
  });

  it('can edit posts', function(){
    cy.visit('/posts');
    cy.contains('New post').click();

    cy.get('#new-post-form').find('[type="text"]').type('H!');
    cy.get('#new-post-form').submit();
    cy.get('.posts').should('contain', 'H!');
    cy.contains('Edit').first().click();
    cy.get('#new-post-form').find('[type="text"]').clear().type('L!');
    cy.get('#new-post-form').submit();
    cy.get('.posts').should('not.contain', 'H!');
    cy.get('.posts').should('contain', 'L!');
  });

});
