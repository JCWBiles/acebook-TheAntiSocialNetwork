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


module.exports = User;
