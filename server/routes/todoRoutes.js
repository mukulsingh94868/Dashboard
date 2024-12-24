const express = require('express');
const { addTodo, getTodo, updateTodo, deleteTodo, getTodoByFilter } = require('../controllers/todoController');
const AuthMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/addTodo', AuthMiddleware, addTodo);
router.get('/getTodo/:userId', AuthMiddleware, getTodoByFilter);
router.get('/getTodo', getTodo);
router.put('/updateTodo/:id', AuthMiddleware, updateTodo);
router.delete('/deleteTodo/:id', AuthMiddleware, deleteTodo);


module.exports = router;