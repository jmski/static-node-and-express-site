  
const express = require('express');
const { render } = require('pug');
const app = express.Router();
const {projects} = require('../data/data.json');

app.all('*', (req, res, next) => {
    const projectsArray = Object.values(projects);
    projectsArray.forEach( project => {
        if (req.url === `/project/${project.id}`) {
            return next();
        }
        if(req.url === `/project/about`) {
            res.redirect('/about');
        }
    });
    const err = new Error('Page not found!');
    err.status = 404;
    err.message = 'Page not found';
    next(err);
});

app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.locals.error = err;
        res.render('page-not-found');
    } else if (err.status === 500) {
        res.locals.error = err;
        render('error');
    }

});

module.exports = app;