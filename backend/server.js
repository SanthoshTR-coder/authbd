const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB(); // ✅ Now it connects to MongoDB

const app = express();

const corsOptions = {
  origin: ['https://authfd.vercel.app', 'https://authfd-u6ii.vercel.app','https://authfd-u4h9.vercel.app'],
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());

// ✅ Use the auth routes at /api/auth/*
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
