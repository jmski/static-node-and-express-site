//This file holds the main routes of my app

//Setting reqs for this file
const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');

//routes
router.get('/', (req, res) => {
    res.render('index', { projects });
});

router.get('/about', (req, res) => {
    res.render('about');
});

//This allows us to export and use in app.js | Keep at bottom
module.exports = router;