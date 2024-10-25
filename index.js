import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());

// Define a simple route
app.post('/api/user', (req, res) => {
    
});

app.get('/api', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(4000);