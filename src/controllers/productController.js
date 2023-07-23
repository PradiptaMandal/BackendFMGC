const Product = require('../models/Product');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product' });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, category, price } = req.body;
    const product = await Product.create({ name, category, price });
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ error: 'Error creating product' });
  }
};

// Update an existing product by ID
exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, category, price } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, category, price },
      { new: true } 
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ error: 'Error updating product' });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting product' });
  }
};
