
const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');

//this makes it so that any route that is not defined will pass through a defined error.
router.all('*', (req, res, next) => {
    const projectsArray = Object.values(projects);
    projectsArray.forEach( project => {
        if (req.url === `/project/${project.id}`) {
            return next();
        }
    });
    const err = new Error('Page not found!');
    err.status = 404;
    console.log(`Something went wrong. Status: ${err.status}, Message: ${err.message}, Stack: ${err.stack}`)
    next(err);
});

//renders the error pug template when an error passes through.
router.use((err, req, res, next) => {
    res.locals.error = err;
    res.render('error');
});

//This allows us to export and use in app.js | Keep at bottom
module.exports = router;