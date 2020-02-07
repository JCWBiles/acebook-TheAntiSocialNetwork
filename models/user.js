var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  user_id: String,
  id: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  dateCreated: { type: Date, default: Date.now() },
});

var User = mongoose.model('Users', UserSchema);
// 
// User.findByIdAndRemove({'_id': {"$oid":"5e3bfb927b5e1231762bd7f8"}}).exec(function(err){
//   console.log(User);
// });


module.exports = User;
