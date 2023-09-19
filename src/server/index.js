const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send('Hello from the API!');
});

const port = 5432;

app.listen(port, () => {
  console.log(`Express server is running on port ${port}}`);
});
