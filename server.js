const express = require('express');
const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const authRoutes = require('./routes/auth');
const ordersRoutes = require('./routes/orders');

const app = express();

// Other app configurations and middleware...

// Register the routes
app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', ordersRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
