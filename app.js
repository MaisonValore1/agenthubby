require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const app = express();

// Database verbinding
connectDB();

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'AgentHubby' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server draait op http://localhost:${PORT}`);
});
