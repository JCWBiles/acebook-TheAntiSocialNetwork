var User = require('../models/user');

var MainController = {
  Index: function(req, res) {
    User.find({_id: req.session.userId}, function(err, users) {
      if (err) { throw err; }
      // req.session.userId = user._id;
      console.log(req.session.userId)
      res.render('main/index', { users: users });
    })
  }
}

module.exports = MainController;
