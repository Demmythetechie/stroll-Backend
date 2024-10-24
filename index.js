import e from 'express';
import cors from 'cors';
const app = e();

const allowedOrigins = ['https://stroll-naheem-okunades-projects.vercel.app']; // No trailing slash

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow credentials (cookies, authorization headers)
}));

// Define a simple route
app.post('/user', (req, res) => {
    console.log(req.body);
});

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(4000)