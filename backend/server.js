const express = require('express');
const connectToDb = require('./Config/db');
const cors = require('cors'); // ✅ CORS middleware

require('dotenv').config();

const app = express();

// ✅ Enable CORS for frontend (default: Vite = http://localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

const userRoutes = require('./Routes/UserRoutes');
const skillRoutes = require('./Routes/SkillRoutes');

const port = process.env.PORT || 3000;
const db_url = process.env.DB_URI;

app.use('/users', userRoutes);
app.use('/skills', skillRoutes);

app.get('/', (req, res) => {
  res.json('This is the Home route');
});

app.listen(port, async () => {
  try {
    await connectToDb(db_url);
    console.log(`Server is running on http://localhost:${port}`);
  } catch (err) {
    console.log('Failed to connect to the server', err);
  }
});
