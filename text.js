const express = require('express');
const path = require('path');
const app = express();
const PORT = 7000;


app.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'text.txt');
  res.download(filePath, 'sample.txt', (err) => {
    if (err) {
      console.error('Download failed:', err);
      res.status(500).send('Could not download the file.');
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// Test the endpoint by visiting http://localhost:7000/download