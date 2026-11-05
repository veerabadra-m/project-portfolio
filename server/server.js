
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
  })
);

// Parse JSON requests
app.use(express.json({ limit: '10kb' }));

// Basic rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: {
    success: false,
    message: 'Too many requests. Please try again later.',
  },
});

app.use('/api/contact', contactRoutes);

// Health check route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Portfolio backend is running!',
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Portfolio backend running on http://localhost:${PORT}`);
});
