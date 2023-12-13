const express = require('express');
const { PlaceOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/place-order', PlaceOrder);

module.exports = router;