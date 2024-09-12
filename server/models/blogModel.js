const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    summary: String,
    content: String,
    image: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
}, {
    timestamps: true,
});

const BlogModel = mongoose.model('blogs', blogSchema);
module.exports = BlogModel;