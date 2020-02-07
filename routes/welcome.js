var express = require('express');
var router = express.Router();

var WelcomeController = require('../controllers/welcome')

router.get('/', WelcomeController.Index);

module.exports = router;
