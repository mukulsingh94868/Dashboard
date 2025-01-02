const ProductCategory = require("../models/productCategoryModel");

// POST: Create a new blog for a specific category
const createProductByCategory = async (req, res) => {
  const { category } = req.params;
  const { title, description, fullDescription } = req.body;

  // Process uploaded images
  const images = req.files.map((file) => file.path);

  try {
    const newProductCategory = new ProductCategory({
      category,
      title,
      description,
      fullDescription,
      images,
    });

    await newProductCategory.save();
    res.status(201).json({
      statusCode: 201,
      message: "Product created successfully",
      newProductCategory,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create blog", details: error.message });
  }
};


// GET: Fetch blogs by category
const getBlogsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const blogsByCategory = await ProductCategory.find({ category });
    if (blogsByCategory?.length === 0) {
      return res
        .status(404)
        .json({ message: "No blogs found for this category" });
    }
    res
      .status(200)
      .json({
        statusCode: 200,
        message: "Blogs fetched successfully",
        data: blogsByCategory,
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch blogs", details: error.message });
  }
};

// GET: Fetch a detailed blog by ID
const getBlogById = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await ProductCategory.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "ProductCategory not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch blog", details: error.message });
  }
};

module.exports = {
  createProductByCategory,
  getBlogsByCategory,
  getBlogById,
};
