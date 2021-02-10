const express = require('express');
const router = express.Router();
const {projects} = require('../data/data.json');

router.all('*', (req, res, next) => {
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
    console.log(`Something went wrong. Status: ${err.status}, Message: ${err.message}, Stack: ${err.stack}`)
    next(err);
});

router.use((err, req, res, next) => {
    res.locals.error = err;
    res.render('page-not-found');
});

module.exports = router;