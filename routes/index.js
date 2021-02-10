const express = require('express');
const app = express.Router();
const {projects} = require('../data/data.json');

app.get('/', (req, res) => {
    res.render('index', { projects });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/page-not-found', (req, res) => {
    res.render('page-not-found');
});

app.get('/error', (req, res) => {
    res.render('error');
});

module.exports = app;