var express = require('express');
var router = express.Router();
var PostsController = require('../controllers/posts')
var MainController = require('../controllers/main');

router.get('/', MainController.Index);
router.post('/', PostsController.Create);


module.exports = router;
