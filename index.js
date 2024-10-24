import e from 'express';
import cors from 'cors';
const app = e();

app.use(cors());

// Define a simple route
app.post('/user', (req, res) => {
    console.log(req.body);
});

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(4000)