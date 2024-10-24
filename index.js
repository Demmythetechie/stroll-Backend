const express = require('express');
const app = express();

// Define a simple route
app.post('/user', (req, res) => {
    console.log(req.body);
});

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});