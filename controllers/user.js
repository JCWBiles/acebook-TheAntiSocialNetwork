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

    });
  console.log(req.body.firstname);
  console.log(req.body.email);
  console.log(req.body._id);
    user.save(function(err) {
      if (err) { throw err; }
      else {
        req.session.userId = user._id;
        res.status(201).redirect('/main')
      }
    });
  },

  New: function(req, res) {
    res.render('user/new', {});
  },

  Authenticate: function(req, res) {
    User.findOne({email: req.body.email}, function(err,user){
      if (user) {
        bcrypt.compare(req.body.password, user.password, function (err, result) {
          if (result == true) {
            req.session.userId = user._id;
            console.log(req.session.userId)
            res.redirect('/main');
          }
          else {
            console.log('wrong password');

            res.status(201).redirect('/')
          }
        })
      }
      else {
        console.log('wrong email');
        res.status(201).redirect('/')
      }
    });
  },

  // Dashboard: function(req, res){
  //     console.log(req.session.userId)
  //     if(!req.session.userId){
  //       res.unauthorizedRequest('You are not logged in',res);
  //       res.status(201).redirect('/')
  //     }else{
  //       res.successResponse('Welcome to dashboard!',res,req.session.userId);
  //     }
  //     res.render('main/index', { title: 'Welcome' });
  // },


  Logout: function(req, res) {
    // var user = new User;
    // req.session.userId = user._id;
    console.log(req.session.userId)
    req.session.destroy(function(err){
      if(err){
        console.log(err);
        throw err;
      }
      else
      {
        res.status(201).redirect('/');
      }
    });
  }
};
 // req.flash('notify', 'You have logged out!')
module.exports = UserController;
