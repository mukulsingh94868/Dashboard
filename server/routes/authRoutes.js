const express = require('express');
const { register, login, getAllData, updateData, deleteData, getSingleData } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/getData', getAllData);
router.get('/getData/:id', getSingleData);
router.put('/updateData/:id', updateData);
router.delete('/deleteData/:id', deleteData);

module.exports = router;