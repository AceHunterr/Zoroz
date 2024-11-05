// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const { getProducts, getProductById } = require("../controllers/productController");

router.get("/", getProducts);
router.get("/:id", getProductById);

const Product = require('../models/Product'); // Assuming you have a Product model

// Add a new product
router.post('/add', async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const newProduct = new Product({ name, description, price, stock });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    res.status(400).json({ message: 'Failed to add product', error: error.message });
  }
}); 

module.exports = router;
