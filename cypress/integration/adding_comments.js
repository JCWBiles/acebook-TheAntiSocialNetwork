describe('adding new comments', function() {
  it('can add new comment', function () {
    posts = PostsController.Create(message: 'Hello, world!');

    cy.visit('/posts');
    cy.contains('Comment').first().click();
    cy.url().should('eq', '/posts/{{posts._id}}/comment')
    cy.get('#new-post-form').find('[type="text"]').type('Hello comment');
    cy.get('#new-post-form').submit();
    cy.url().should('eq', '/posts');
    cy.get('.posts').first().should('contain', 'Hello comment');

  });
});
