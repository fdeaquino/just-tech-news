const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {
    // with this upvote method, we pass in the value of req.body as body, and an object of the models as models
    // passes the Vote model as an argument from post-routes.js
    static upvote(body, models) {
        return models.Vote.create({
            user_id: body.user_id,
            post_id: body.post_id
        }).then(() => {
            return Post.findOne({
                where: {
                    id: body.post_id
                },
                attributes: [
                    'id',
                    'post_url',
                    'title',
                    'created_at',
                    [
                        sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
                        'vote_count'
                    ]
                ]
            });
        });
    }
}

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
