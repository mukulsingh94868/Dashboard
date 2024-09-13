const express = require('express');
const { addFavourite, getFavourite } = require('../controllers/favouriteController');
const AuthMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/addFav', AuthMiddleware, addFavourite);
router.get('/getFav', AuthMiddleware, getFavourite);


module.exports = router;