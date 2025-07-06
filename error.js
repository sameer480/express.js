const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});


app.get('/error', (req, res, next) => {

  const err = new Error('Something went wrong on the server!');
  next(err); 
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.error('Error caught:', err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
    error: err.message  
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
// Test the endpoints by visiting:
// - http://localhost:3000/ (should return "Welcome to the home page!")
// - http://localhost:3000/error (should return an error message)
// - http://localhost:3000/some-non-existent-route (should return a 404 error message)