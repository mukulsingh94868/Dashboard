const ProductModel = require("../models/productModel");

module.exports.ProductData = async (req, res) => {
    try {
        const name = req.body.name;
        const salePrice = req.body.salePrice;
        const regularPrice = req.body.regularPrice;
        const vendor = req.body.vendor;
        const type = req.body.type;
        const color = req.body.color;
        const inches = req.body.inches;
        const storageRAM = req.body.storageRAM;
        const quantity = req.body.quantity;
        const varients = req.body.varients;
        const prices = req.body.prices;
        const imageUrl = req.body.imageUrl;
        const description = req.body.description;

        const product = new ProductModel({
            name: name,
            salePrice: salePrice,
            regularPrice: regularPrice,
            vendor: vendor,
            type: type,
            color: color,
            inches: inches,
            storageRAM: storageRAM,
            quantity: quantity,
            varients: varients,
            prices: prices,
            imageUrl: imageUrl,
            description: description
        })
        const savedProduct = await product.save();
        res.status(201).json({
            savedProduct,
            message: 'Product Created Successfully'
        });
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: error.message });
    }
};

module.exports.getProductData = async (req, res) => {
    try {
        const productData = await ProductModel.find();

        if (!productData) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(productData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};