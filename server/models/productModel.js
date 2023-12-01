const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    salePrice: { type: String, required: true },
    regularPrice: { type: String, required: true },
    vendor: { type: String, required: true },
    type: { type: String, required: true },
    color: { type: String, required: true },
    inches: { type: String, required: true },
    storageRAM: { type: String, required: true },
    quantity: { type: String, required: true },
    varients: [],
    prices: [],
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
});

const ProductModel = mongoose.model('products', productSchema);
module.exports = ProductModel;