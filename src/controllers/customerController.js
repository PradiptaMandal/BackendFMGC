const Customer = require('../models/Customer');

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching customers' });
  }
};

// Get a single customer by ID
exports.getCustomerById = async (req, res) => {
  try {
    const customerId = req.params.id;
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching customer' });
  }
};

// Create a new customer
exports.createCustomer = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const customer = await Customer.create({ name, email, address });
    res.status(201).json({ message: 'Customer created successfully', customer });
  } catch (error) {
    res.status(500).json({ error: 'Error creating customer' });
  }
};

// Update an existing customer by ID
exports.updateCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const { name, email, address } = req.body;
    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      { name, email, address },
      { new: true } 
    );
    if (!updatedCustomer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer updated successfully', customer: updatedCustomer });
  } catch (error) {
    res.status(500).json({ error: 'Error updating customer' });
  }
};

// Delete a customer by ID
exports.deleteCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const deletedCustomer = await Customer.findByIdAndDelete(customerId);
    if (!deletedCustomer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer deleted successfully', customer: deletedCustomer });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting customer' });
  }
};
