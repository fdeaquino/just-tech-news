// this file will serve as a means to collect all of the API routes and package them up, similar to the index.js file in the models folder

const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
