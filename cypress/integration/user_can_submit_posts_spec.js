describe('Timeline', function() {
  it('can submit posts and view them', function() {
    cy.visit('/posts');
    cy.contains('New post').click();

    cy.get('#new-post-form').find('[type="text"]').type('Hello, world!');
    cy.get('#new-post-form').submit();

    cy.get('.posts').should('contain', 'Hello, world!');
  });

  it('can delete posts', function(){
    var post = new Post({ message: 'Hello, world!' });
    cy.visit('/posts');
    cy.get('.posts').should('contain', 'Hello, world!');
    cy.contains('delete').click();

    cy.visit('/posts');
    cy.get('.posts').should('not.contain', 'Hello, world!');
  });


});
