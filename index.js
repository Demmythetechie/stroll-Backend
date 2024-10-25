import express from 'express';
import cors from 'cors';

const app = express();

// Configure allowed origins for CORS
const allowedOrigins = ['https://stroll-naheem-okunades-projects.vercel.app'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));

// Middleware to parse JSON
app.use(express.json());

// Define the /api/user route
app.post('/api/user', (req, res) => {
  res.json({ message: req.body });
});

// Export the app for Vercel
export default app;