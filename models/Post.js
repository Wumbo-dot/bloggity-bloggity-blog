//requirements
const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequlizeConnection');

const Post = sequelizeConnection.define('post', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
            mode: 'User',
            key: 'id'
        }
    }
},
{
    sequelize:sequelizeConnection,
    timestamp: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts'
});

module.exports = Post;