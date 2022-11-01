// This file will collect the packaged API group of API endpoints and prefixing them with the path /api
// this file will import the routes to the server.js file
const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
