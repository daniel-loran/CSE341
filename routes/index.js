const routes = require('express').Router();
const contactsController = require('../controllers/contacts');
 
routes.use('/contacts', require("./contacts"));

module.exports = routes;