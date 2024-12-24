const express = require('express');
const { getEvents, createEvent, deleteEvent, getAllEvents } = require('../controllers/calenderController');
const AuthMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/events', getAllEvents);
router.get('/events/:userId', AuthMiddleware, getEvents);
router.post('/events', AuthMiddleware, createEvent);
router.delete('/events/:id', AuthMiddleware, deleteEvent);

module.exports = router;