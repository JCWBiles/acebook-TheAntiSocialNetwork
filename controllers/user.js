var User = require('../models/user');
var bcrypt = require('bcrypt');

var UserController = {
  Index: function(req, res) {
    // User.find(function(err, users) {
    //   if (err) { throw err; }

      res.render('user/index', { title: 'Sign Up'});
    },

  Create: function(req, res) {
    var user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      user_id: req.body.user_id
    });

    user.save(function(err) {
      if (err) { throw err; }

      res.status(201).redirect('/main');
    });
  },

  New: function(req, res) {
    res.render('user/new', {});
  },
  
  // Authenticate: function (email, password, callback) {
  //   UserSchema.statics.authenticate = function (email, password, callback) {
  //   User.findOne({ email: email })
  //     .exec(function (err, user) {
  //       if (err) {
  //         return callback(err)
  //       } else if (!user) {
  //         var err = new Error('User not found.');
  //         err.status = 401;
  //         return callback(err); 
  //       }
  //       bcrypt.compare(password, user.password, function (err, result) {
  //         if (result === true) {
  //           return callback(null, user);
  //         } else {
  //           return callback();
  //         }
  //       })
  //     });
  // };

  // Authenticate: function(req,res) {
  //   var user = new User({
  //     email: req.body.email,
  //     password: req.body.password
  //     // user_id: req.body.user_id
  //   });

  //   user.isMatch(function(err) {
  //     if (err) { throw err; }

  //     res.status(201).redirect('/main');
  //   });
  // },
//   Authenticate: passport.use(new LocalStrategy(
//     function(email, password, done) {
//       User.findOne({ email: email }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ))
};
  
module.exports = UserController;
