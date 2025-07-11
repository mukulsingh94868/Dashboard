const express = require('express');
const { getProductData, ProductData, getProductDataById } = require('../controllers/productController');
const router = express.Router();

router.post('/products', ProductData);
router.get('/products', getProductData);
router.get('/products/:id', getProductDataById);

module.exports = router;
