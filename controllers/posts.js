var Post = require('../models/post');
var User = require('../models/user');
var PostsController = {
  Index: function(req, res) {
    // console.log('INDEX Running')
    Post.find(function(err, posts, users) {
      if (err) { throw err; }
      res.render('posts/index', { posts: posts, users: users });
      console.log(req.session.userId);
    }).sort( { date: -1 } );
  },

  New: function(req, res) {
    // console.log('NEW Running')
    res.render('posts/new', {});
  },

  Create: function(req, res) {
    User.find({_id: req.session.userId}, function(err) {
      if (err) { throw err; }
      // console.log('CREATE Running')
      var post = new Post({
        message: req.body.message,
        date: req.body.date,
        user: req.body.user,

      });
      console.log(req.body.message);
      console.log(req.session.userId);

      post.save(function(err) {
        if (err) { throw err; }

        res.redirect('/posts'); //currently working on attaching user object to post page.
      })
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
  }


};
module.exports = PostsController;
