const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Allow only your frontend origin
    methods: 'GET,POST,PUT,DELETE',  // Allow these HTTP methods
    credentials: true,               // Enable cookies/sessions if needed
}));

// Define a simple route
app.post('/user', (req, res) => {
    console.log(req.body);
});

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});