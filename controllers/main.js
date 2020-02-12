var session = require('express-session');

var MainController = {
  Index: function(req, res) {
    res.render('main/index', { title: 'Welcome' });
  }
};

module.exports = MainController;
