const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.get('/', (req, res) =>
    res.sendFile(path.join (__dirname, '/public/index.html'))
);
