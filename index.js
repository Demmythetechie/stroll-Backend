import e from 'express';
import cors from 'cors';
const app = e();

app.use(cors({
    origin: 'http://localhost:3000', // Allow only your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow these HTTP methods
    credentials: true,               // Enable cookies/sessions if needed
}));

// Define a simple route
app.post('/user', (req, res) => {
    console.log(req.body);
});

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(4000)