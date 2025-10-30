const config = require('./config');
const express = require('express');
const routes = require('./routes');

config.connectMongoDb(config.MONGODB_URI);

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static views

// API and redirect routes

// Route
app.use('/', routes);

// Basic error handler
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});



module.exports = app;