const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.jesusRoute);
routes.get('/david', lesson1Controller.davidRoute);

module.exports = routes;