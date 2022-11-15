// This file will collect the packaged API group of API endpoints and prefixing them with the path /api
// this file will import the routes to the server.js file
const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');

const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);

router.use('/dashboard', dashboardRoutes);

router.use('/api', apiRoutes);

module.exports = router;
