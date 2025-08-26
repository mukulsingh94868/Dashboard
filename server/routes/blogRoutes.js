const express = require('express');
const { blogPost, getPost, getPostById } = require('../controllers/blogControllers');
const upload = require('../middleware/upload');
const AuthMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/post', upload.single("image"), blogPost);
router.get('/post', getPost);
router.get('/post/:id', getPostById);

module.exports = router;