const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/products.json');

const Product = {
  getAllProducts: (callback) => {
    fs.readFile(productsFile, 'utf8', (err, data) => {
      if (err) {
        return callback(err, null);
      }
      const products = JSON.parse(data);
      return callback(null, products);
    });
  },
  
  // Implement other methods as needed
};

module.exports = Product;
