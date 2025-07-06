//Implement an Express.js route /users/:id that retrieves a user by ID from a hardcoded array and returns a 404 status if the user is not found.
const express = require('express');
const app = express();
const PORT = 4000;
const users = [
  { id: 1, name: 'Sameer', email: 'sameer@example.com' },
  { id: 2, name: 'John', email: 'john@example.com' },
  { id: 3, name: 'Alice', email: 'alice@example.com' }
];
app.get('/users/:id',(req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u=>u.id===userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
    res.json(user);
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
//http://localhost:4000/users/1
