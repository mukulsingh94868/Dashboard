const express = require('express');
const { blogPost, getPost, getPostById } = require('../controllers/blogControllers');
const router = express.Router();

router.post('/post', blogPost);
router.get('/post', getPost);
router.get('/post/:id', getPostById);


module.exports = router;