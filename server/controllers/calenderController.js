// controllers/eventController.js
const Event = require('../models/calenderModel');

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Get all events with user Id
exports.getEvents = async (req, res) => {
  try {
    const userId = res?.locals?.userId
    const events = await Event.find({ userId });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




// Create a new event
exports.createEvent = async (req, res) => {
  const userId = res?.locals?.userId;
  const { title, start, end, allDay } = req.body;

  try {
    const newEvent = new Event({
      userId,
      title,
      start,
      end,
      allDay,
    });
    const savedEvent = await newEvent.save();
    res.status(201).json({ statusCode: 201, message: 'Calender Saved Sucessfully', savedEvent });
  } catch (error) {
    // res.status(400).json({ message: error.message });
    res.status(500).json({ error: 'Failed to create Calender.' });
  }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};