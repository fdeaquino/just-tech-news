// This file will be more important in the future as we create more models
// for now, we will use to collect and export the User model data

// imports the User model
const User = require('./User');

// imports the Post model
const Post = require('./Post');

// imports the Vote model
const Vote = require('./Vote');

// imports the Comment model
const Comment = require('./Comment');

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

// MANY TO MANY Relationship

User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

// MANY TO MANY Relationship
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

// Direct relationship between vote and user
// Allows us to see ?? who the vote belongs to
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

// Direct relationship between vote and post
// Allows us to see the total count of votes for a single post when queried
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

// One to Many relationship
User.hasMany(Vote, {
    foreignKey: 'user_id'
});

// One to Many relationship
Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

// Direct relationship between the comment and user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// Direct relationship between the comment and post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// One to many relationship
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// One to many relationship
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});



// exports an object with it as a property
module.exports = { User, Post, Vote, Comment };
