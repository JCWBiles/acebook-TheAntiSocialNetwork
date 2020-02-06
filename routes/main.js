var express = require('express');
var router = express.Router();

var MainController = require('../controllers/main');

router.get('/', MainController.Index);

module.exports = router;