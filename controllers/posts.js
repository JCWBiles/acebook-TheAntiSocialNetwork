var Post = require('../models/post');
var session = require('express-session');

var PostsController = {
  Index: function(req, res) {
    // console.log('INDEX Running')
    Post.find(function(err, posts) {
      if (err) { throw err; }
      res.render('posts/index', { posts: posts });
    }).sort( { date: -1 } );
  },

  New: function(req, res) {
    // console.log('NEW Running')
    res.render('posts/new', {});
  },

  Create: function(req, res) {
    // console.log('CREATE Running')
    var post = new Post(req.body);
    post.save(function(err) {
      if (err) { throw err; }

      res.status(201).redirect('/posts');
    })
  },

  Delete: function(req, res){
    // console.log('DELETE Running')
    Post.findByIdAndRemove({_id: req.params._id}, function(err){
      if (err) { throw err; }
      res.status(201).redirect('/posts');
    })
  },


  Change: function(req, res) {
    Post.find({_id: req.params._id}, function(err, posts) {
      if (err) { throw err; }
      res.render('posts/edit', { posts: posts })
    })
  },

  Edit: function(req, res){
    // console.log('EDIT Running')
    // console.log(req.body.message)
    Post.findOneAndUpdate({_id: req.params._id}, {$set: { message: req.body.message }, overwrite: true} , function(err){
      // console.log("finished upodate");
      if (err) { throw err; }
      res.status(201).redirect('/posts');
    });
  },

  Comment: function(req, res){
    Post.find({_id: req.params._id}, function(err, posts) {
      if (err) { throw err; }
      res.render('posts/comment', { posts: posts })
    })
  },

};

module.exports = PostsController;
