const express = require('express');
const app = express();
const PORT = 9000;

// Dummy product list
const products = [];
for (let i = 1; i <= 100; i++) {
  products.push({ id: i, name: `Product ${i}` });
}

// GET /products?page=2&limit=10
app.get('/products', (req, res) => {
  const page = parseInt(req.query.page) || 1;   // default to page 1
  const limit = parseInt(req.query.limit) || 10; // default to 10 items per page

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedProducts = products.slice(startIndex, endIndex);

  res.json({
    currentPage: page,
    limitPerPage: limit,
    totalProducts: products.length,
    totalPages: Math.ceil(products.length / limit),
    data: paginatedProducts
  });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// Test the endpoint by visiting http://localhost:9000/products?page=2&limit=10
// You can change the page and limit parameters to see different results.
//Write an Express.js route /products that supports pagination using query parameters page and limit.