const express = require('express');
const { PlaceOrder, getOrders } = require('../controllers/orderController');
const router = express.Router();

router.post('/place-order', PlaceOrder);
router.get('/get-orders', getOrders);

module.exports = router;