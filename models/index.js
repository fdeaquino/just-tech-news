// This file will be more important in the future as we create more models
// for now, we will use to collect and export the User model data

// imports the User model
const User = require('./User');

// imports the Post model
const Post = require('./Post');

// create model associations
// ONE TO MANY relationship (one user can have many posts)
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// The following creates the reverse association between User and Post
// The constraint imposed here is that a post can belong to one user, but not many users. 
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// exports an object with it as a property
module.exports = { User, Post };
