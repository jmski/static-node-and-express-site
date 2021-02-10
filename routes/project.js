const express = require('express');
const router = express.Router();
const {projects} = require('../data/data.json');

router.get('/', (req, res) => {
    res.redirect('/');
});

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

module.exports = router;