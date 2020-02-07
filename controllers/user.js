var User = require('../models/user');

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
  }
};
  module.exports = UserController;
