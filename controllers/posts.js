var Post = require('../models/post');

var PostsController = {
  Index: function(req, res) {
    console.log('INDEX Running')
    Post.find(function(err, posts) {
      if (err) { throw err; }
      res.render('posts/index', { posts: posts });
    }).sort( { date: -1 } );
  },

  New: function(req, res) {
    console.log('NEW Running')
    res.render('posts/new', {});
  },

  Create: function(req, res) {
    console.log('CREATE Running')
    var post = new Post(req.body);
    post.save(function(err) {
      if (err) { throw err; }

      res.status(201).redirect('/posts');
    })
  },

  Delete: function(req, res){
    console.log('DELETE Running')
    Post.findByIdAndRemove({_id: req.params._id}, function(err){
      if (err) { throw err; }
      res.status(201).redirect('/posts');
    })
  },


  Change: function(req, res) {
    // console.log(req.body);
    Post.find({_id: req.params._id}, function(err, posts) {
      // console.log(posts);
      if (err) { throw err; }
      res.render('posts/edit', { posts: posts })
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


  // Edit: function(req, res){
  //   console.log(req.body);
  //   Post.findOneAndUpdate({_id: req.params._id }, {$set: { message: req.params.message }}, {new: true}, function(err, posts) {
  //     console.log(posts);
  //     if (!err){
  //       res.status(201).redirect('/posts',{
  //         message: posts.message
  //       });
  //     }
  //   })
  // },

Edit: function(req, res){
  console.log('EDIT Running')
  console.log(req.body.message)
  // console.log(req.body);
      // res.render('posts/edit', {});
      // console.log("working???????");
      //   console.log("Why arent you working???????");
      Post.findOneAndUpdate({_id: req.params._id}, {$set: { message: req.body.message }, overwrite: true} , function(err, posts){

          console.log("finished upodate");
          // res.render('posts/edit',{});
          // console.log({message: req.params.message});
          if (err) { throw err; }
          // console.log("Hi2");
          // console.log("Hi3");
          // res.render('posts/edit',{});
          // console.log(err);
          // console.log(posts)
          // res.render('/posts',{});
          res.status(201).redirect('/posts');

        })

}

};

module.exports = PostsController;
