const express = require('express');
const app = express();
const PORT = 3000;

// Route: /greet?name=Sameer
app.get('/greet', (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.status(400).json({ message: 'Name query parameter is required' });
  }

  res.send(`Hello, ${name}! Welcome to our server 🎉`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
// Test the endpoint by visiting http://localhost:3000/greet?name=Sameer