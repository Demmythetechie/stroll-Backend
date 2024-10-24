import e from 'express';
import cors from 'cors';
const app = e();

const corsOptions ={
    origin:'https://stroll-naheem-okunades-projects.vercel.app/', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// Define a simple route
app.post('/user', (req, res) => {
    console.log(req.body);
});

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(4000)