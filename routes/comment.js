var express = require('express');
var router = express.Router();

var CommentController = require('../controllers/comment')

router.post('/posts/:id/comment', CommentController.Create);
module.exports = router;
