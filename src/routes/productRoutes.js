const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

// GET all products
router.get('/', productController.getAllProducts);

// GET a single product by ID
router.get('/:id', productController.getProductById);

// Create a new product
router.post('/', authMiddleware.isAdmin, productController.createProduct);

// Update an existing product by ID
router.put('/:id', authMiddleware.isAdmin, productController.updateProduct);

// Delete a product by ID
router.delete('/:id', authMiddleware.isAdmin, productController.deleteProduct);

module.exports = router;
