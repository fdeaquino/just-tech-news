const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model { }

// create fields/columns for Post model
// configure the naming conventions and pass the current connection instance to initialize the Post model
Post.init(
    // this first parameter defines the Post schema (the first pink curly braces)
    // id is the Primary key
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        //   the user_id field determines who posted the news article
        user_id: {
            type: DataTypes.INTEGER,
            // establishes a relationship between this post andd the user by creating a reference to the User model
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    // this second parameter (inside the second set of curly braces) configures the metadata including naming conventions
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;
