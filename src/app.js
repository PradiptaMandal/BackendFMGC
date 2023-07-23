
const express = require('express');
const app = express();

const authRoutes = require('./routes/authRoutes');
const customerRoutes = require('./routes/customerRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

// Authentication routes
app.use('/api/auth', authRoutes);

// Customer routes
app.use('/api/customers', customerRoutes);

// Product routes
app.use('/api/products', productRoutes);



module.exports = app;
