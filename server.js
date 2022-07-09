const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const notes = require('./data/db.json');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('api/notes', (req, res) => {
  res.json(notes.slice(1));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});