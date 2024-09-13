const multer = require('multer');
const fs = require('fs');
const uploadMiddleware = multer({ dest: 'uploads/' });
const BlogModel = require('../models/blogModel');
const jwt = require('jsonwebtoken');

module.exports.blogPost = async (req, res) => {
    try {
        const { title, summary, content } = req.body;
        const imagePath = req.file ? req.file.path : null;
        const blog = new BlogModel({
            // userId: res.locals.userId,
            title: title,
            content: content,
            summary: summary,
            image: imagePath
        })
        const savedBlog = await blog.save();
        res.status(201).json({
            savedBlog,
            message: 'Blog Created Successfully'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.getPost = async (req, res) => {
    try {
        const blogData = await BlogModel.find(
            // { userId: res.locals.userId }
        );

        if (!blogData) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blogData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.getPostById = async (req, res) => {
    try {
        const id = req.params.id;
        const blogData = await BlogModel.findById(id);

        if (!blogData) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(blogData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};