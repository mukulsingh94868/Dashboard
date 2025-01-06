// blogRoutes.js
const express = require("express");
const { createProductByCategory, getBlogsByCategory, getBlogById, deleteBlogsByCategory } = require("../controllers/productCategoryController");
const upload = require("../middleware/upload");
const router = express.Router();


// POST API to create a blog
// router.post('/:category', createProductByCategory);

// POST API to create a blog for a specific category with multiple images
router.post('/:category', upload.array("images", 5), createProductByCategory);

// GET API to fetch blogs by category
router.get("/:category", getBlogsByCategory);

// GET API to fetch detailed blog by ID
router.get("/detail/:id", getBlogById);

router.delete("/:id", deleteBlogsByCategory);

module.exports = router;