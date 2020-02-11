var express = require('express');
var router = express.Router();
var PostsController = require('../controllers/posts')
var MainController = require('../controllers/main');

router.get('/', MainController.Index);
// router.get('/new', PostsController.New);
router.post('/', PostsController.Create);


module.exports = router;
