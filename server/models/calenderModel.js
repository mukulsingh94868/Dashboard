const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    title: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    allDay: {
        type: Boolean,
        default: false,
    },
});

const EventModal = mongoose.model('Event', eventSchema);
module.exports = EventModal;
// module.exports = mongoose.model('Event', eventSchema);