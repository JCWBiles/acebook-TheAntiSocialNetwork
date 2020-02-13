var express = require('express');
var router = express.Router();

var PostsController = require('../controllers/posts')

router.get('/', PostsController.Index);
router.post('/', PostsController.Create);
router.get('/new', PostsController.New);
router.post('/delete/:_id', PostsController.Delete);
router.get('/edit/:_id', PostsController.Change);
router.post('/:_id', PostsController.Edit);
router.get('/comment/:_id', PostsController.Comment);
module.exports = router;
