// This file will be more important in the future as we create more models
// for now, we will use to collect and export the User model data

// imports the User model
const User = require('./User');

// imports the Post model
const Post = require('./Post');

// exports an object with it as a property
module.exports = { User, Post };
