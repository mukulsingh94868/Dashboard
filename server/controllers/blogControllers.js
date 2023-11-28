const multer = require('multer');
const fs = require('fs');
const uploadMiddleware = multer({ dest: 'uploads/' });
const BlogModel = require('../models/blogModel');
const jwt = require('jsonwebtoken');

module.exports.blogPost = async (req, res) => {
    try {
        const title = req.body.title
        const summary = req.body.summary
        const content = req.body.content

        const blog = new BlogModel({
            title: title,
            content: content,
            summary: summary
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

// const { originalname, path } = req.file;
// const parts = originalname.split('.');
// const ext = parts[parts.length - 1];
// const newPath = path + '.' + ext;
// fs.renameSync(path, newPath);

// const { token } = req.cookies;
// jwt.verify(token, secret, {}, async (err, info) => {
//     if (err) throw err;
//     const { title, summary, content } = req.body;
//     const postDoc = await Post.create({
//         title,
//         summary,
//         content,
//         cover: newPath,
//         author: info.id,
//     });
//     res.json(postDoc);
// });

module.exports.getPost = async (req, res) => {
    try {
        const blogData = await BlogModel.find();

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