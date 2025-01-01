const mongoose = require("mongoose");

const ProductCategory = new mongoose.Schema(
  {
    category: { type: String, required: true }, // e.g., "mattress", "pillow", "sofa"
    title: { type: String, required: true },
    description: { type: String, required: true }, // Small description for listing
    fullDescription: { type: String, required: true }, // Full description for detailed page
    images: { type: [String], required: true }, // Array of image URLs
  },
  { timestamps: true }
);

module.exports = mongoose.model("productCategory", ProductCategory);
