const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');

//If you go to a project without an id it sends you back to the portfolio page with all projects.
router.get('/', (req, res) => {
    res.redirect('/');
});

//when a /project/id is sent through the request this converts the projects object
//to an array and then goes through and gets the current projects data to use
//in the pug template.
router.get('/:id', (req, res) => {
    const {id} = req.params;
    const projectsArray = Object.values(projects);
    projectsArray.forEach( project => {
        if (project.id === id) {
            const currentProject = { 
                project_name: project.project_name,
                description: project.description,
                technologies: project.technologies,
                live_link: project.live_link,
                github_link: project.github_link,
                image_urls: project.image_urls
            };
            res.render('project', currentProject);
        }
    });
});

//This allows us to export and use in app.js | Keep at bottom
module.exports = router;