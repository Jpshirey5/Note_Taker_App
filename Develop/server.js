// Requiring needed elements
const express = require('express');
const path = require('path');
const fs = require('fs');
const apiRoutes = require('apiRoutes');
const htmlRoutes = require('htmlRoutes');

// Variables for the use of the port and the app
const PORT = process.env.PORT || 3001;
const app = express();

// Use of host public folder, JSON and Parse URL Encoded
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true }));

// Use of the routes
app.use('/api, apiRoutes');
app.use('/html, htmlRoutes');

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });