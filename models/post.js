var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  id: String,
  message: String,
  date: { type: Date, default: Date.now() },
});

var Post = mongoose.model('Post', PostSchema);

// Post.findByIdAndRemove({'_id': {"$oid":"5e3bfb927b5e1231762bd7f8"}}).exec(function(err){
//   console.log(Post);
// });


module.exports = Post;
