const express = require('express');
const { PlaceOrder, getOrders, getOrdersByUserId } = require('../controllers/orderController');
const AuthMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/place-order', AuthMiddleware, PlaceOrder);
router.get('/get-orders', getOrders);
router.get('/get-orders/:userId', AuthMiddleware, getOrdersByUserId);

module.exports = router;