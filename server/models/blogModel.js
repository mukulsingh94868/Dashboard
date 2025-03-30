// const mongoose = require('mongoose');

// const blogSchema = new mongoose.Schema({
//     title: String,
//     summary: String,
//     content: String,
//     image: String,
//     userId: { type: mongoose.Types.ObjectId, ref: "users" },
//     // author: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
// }, {
//     timestamps: true,
// });

// const BlogModel = mongoose.model('blogs', blogSchema);
// module.exports = BlogModel;

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },     
    summary: { type: String },                    
    content: { type: String, required: true },   
    image: { type: String },                      
    // userId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
}, {
    timestamps: true,  // Automatically add createdAt and updatedAt fields
});

const BlogModel = mongoose.model('Blog', blogSchema);
module.exports = BlogModel;
