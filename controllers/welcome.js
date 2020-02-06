var WelcomeController = {
  Index: function(req, res) {
    res.render('welcome/index', {title: 'Welcome'});
  }
};

module.exports = WelcomeController;
