var express = require('express');
var router = express.Router();

var CommentController = require('../controllers/comment')

// router.get('/posts/comment/:_id', CommentController.Index);
router.post('/posts/:id/comment', CommentController.Create);
module.exports = router;
