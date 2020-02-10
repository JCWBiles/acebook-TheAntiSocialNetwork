var mongoose = require('mongoose');
var bcrypt = require ('bcrypt');

var UserSchema = new mongoose.Schema({
  user_id: String,
  _id: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  dateCreated: { type: Date, default: Date.now },
});

UserSchema.pre('save', function(next){
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash){
    if(err){
      return next(err);
    }
    user.password = hash;
  next();
  })
});

var User = mongoose.model('Users', UserSchema);

module.exports = User;
