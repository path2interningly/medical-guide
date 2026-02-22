const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const routes = require('./routes');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors({
<<<<<<< HEAD
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:3000',
    'https://medical-guide-fullstack.vercel.app',
    'https://medical-guide-fullstack-git-main-path2interninglys-projects.vercel.app',
    process.env.FRONTEND_URL
  ].filter(Boolean),
=======
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
>>>>>>> 6e784946d8a1ffbad9bcdf4b66880f54756dd4bf
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', routes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Medical Guide Backend running on http://localhost:${PORT}`);
});
