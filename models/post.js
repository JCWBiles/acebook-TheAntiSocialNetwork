var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let PostSchema = new Schema({
  id: String,
  message: String,
  date: { type: Date, default: Date.now },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
