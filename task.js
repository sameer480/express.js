//Build an Express.js API with POST and GET routes to manage a list of tasks stored in memory, including task creation and retrieval.
const express = require('express');
const app = express();
const PORT = 5000;
const tasks=[];
var nextId= 1;
app.use(express.json());
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }
  const task = {
    id: nextId++,
    title,
    description: description || '',
    completed: false
  };
    tasks.push(task);
    res.status(201).json(task);
});
app.get('/tasks', (req, res) => {
  res.json(tasks);
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});