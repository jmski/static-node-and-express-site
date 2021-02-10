// require dependancies
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const projects = require('./routes/project');
const errorHandler = require('./routes/error');

// create the express app
const app = express();

// view engine setup
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded( {extended: false} ));

// set to static
app.use('/static', express.static('public'));
app.use('/images', express.static('img'));

app.use(routes);
app.use(errorHandler);
app.use('/project', projects);
app.use(errorHandler);

// log on port 3000
app.listen(3000, () => {
    console.log('Live server is working on localhost:3000.');
})