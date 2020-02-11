var Post = require('../models/post');

var PostsController = {
  Index: function(req, res) {
    Post.find(function(err, posts) {
      if (err) { throw err; }
      res.render('posts/index', { posts: posts });
    }).sort( { date: -1 } );
  },

  New: function(req, res) {
    res.render('posts/new', {});
  },

  Create: function(req, res) {
    var post = new Post(req.body);
    post.save(function(err) {
      if (err) { throw err; }

      res.status(201).redirect('/posts');
    })

    // promise.then(function(err) {
    //   res.render('posts/edit', {});
    //   if (err) { throw err; }
    //   // If a Review was created successfully, find one Product with an `_id` equal to `req.params.id`. Update the Product to be associated with the new Review
    //   // { new: true } tells the query that we want it to return the updated Product -- it returns the original by default
    //   // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
    //   return Post.findOneAndUpdate({ _id: req.params.id }, { message: req.params.message }, { new: true });
    // })
    // promise.then(function(res) {
    //   // If we were able to successfully update a Product, send it back to the client
    //   res.status(201).redirect('/posts');
    // })
    // promise.catch(function(err) {
    //   // If an error occurred, send it to the client
    //   if (err) { throw err; }
    // });
  },

  Delete: function(req, res){
    Post.findByIdAndRemove({_id: req.params._id}, function(err){
      if (err) { throw err; }
      res.status(201).redirect('/posts');
    })
  },


  Change: function(req, res) {
    console.log(req.body);
    Post.find({_id: req.params._id}, function(err, posts) {
      if (err) { throw err; }
      res.render('posts/edit', {
        message: posts.message,
      });
    })
  },

  // Edit: function (req, res) {
  //   Post.updateOne(
  //   {
  //     id: req.params._id  // search query
  //   },
  //   {$set: {
  //     message: req.params.message   // field:values to update
  //   }},
  //   {
  //     new: true,                       // return updated doc
  //     runValidators: true              // validate before update
  //   })
  // .then(doc => {
  //   console.log(doc)
  //   res.render('posts/edit', {});
  // })
  // .catch(err => {
  //   console.error(err)
  // })
  // }


  Edit: function(req, res){
    console.log(req.body);
    Post.find({_id: req.params._id}, function(err, posts) {
      if (!err){
        res.render('/posts/edit',{
          message: posts.message
        });
      }
    })
  },

  NewP: function(req, res){
    Post.find({_id: req.params._id}, function(err, posts) {
      if (!err){
        res.render('/posts',{
          message: posts.message
        });
      }
    })
  }
  // if (posts){
  //     // res.render('posts/edit', {});
  //     console.log("working???????");
  //       console.log("Why arent you working???????");
  //       Post.updateOne({_id: req.params._id}, {$set: { message: req.params.message }}, {new: true}, function(err, posts){
  //         console.log(posts);
  //         res.render('posts/edit',{});
  //         console.log({message: req.params.message});
  //         if (err) { throw err; }
  //         console.log("Hi2");
  //         console.log("Hi3");
  //         // res.render('posts/edit',{});
  //         console.log(err);
  //         console.log(posts)
  //         // res.render('/posts',{});
  //         // res.status(201).redirect('/posts');
  //       })
  //   }

};

module.exports = PostsController;
