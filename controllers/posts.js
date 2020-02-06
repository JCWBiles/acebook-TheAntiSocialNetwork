var Post = require('../models/post');

var PostsController = {
  Index: function(req, res) {
    Post.find(function(err, posts) {
      if (err) { throw err; }

      res.render('posts/index', { posts: posts });
    });
  },
  New: function(req, res) {
    res.render('posts/new', {});
  },
  Create: function(req, res) {
    var post = new Post(req.body);
    post.save(function(err) {
      if (err) { throw err; }

      res.status(201).redirect('/posts');
    });
  },

  Delete: function(req, res){
    var post = new Post
console.log("**1**");
console.log({_id: req.params.post.id});
    post.remove({_id: req.params.id}, function(err) {
      console.log("***2**");
      if(err) {
        res.json({status: false, error: "Deleting post is not successfull"});
        return;
      }
    });
    console.log("Hi");
    res.status(201).redirect('/posts');
  }
};


module.exports = PostsController;
