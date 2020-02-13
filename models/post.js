var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var ObjectId = Schema.Types.ObjectId

let PostSchema = new Schema({
  id: String,
  message: String,
  date: { type: Date, default: Date.now },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }
});

var Post = mongoose.model('Post', PostSchema);
Post.aggregate([{ "$lookup": {
  "localField": "user", "from": "Users", "foreignField": "_id", "as": "userinfo" }},
  { "$unwind": "$userinfo" }, ]);
module.exports = Post;
