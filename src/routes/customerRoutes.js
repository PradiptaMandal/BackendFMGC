const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const authMiddleware = require('../middleware/authMiddleware');

// GET all customers
router.get('/', customerController.getAllCustomers);

// GET a single customer by ID
router.get('/:id', customerController.getCustomerById);

// Create a new customer
router.post('/', authMiddleware.isAdmin, customerController.createCustomer);

// Update an existing customer by ID
router.put('/:id', authMiddleware.isAdmin, customerController.updateCustomer);

// Delete a customer by ID
router.delete('/:id', authMiddleware.isAdmin, customerController.deleteCustomer);

module.exports = router;
