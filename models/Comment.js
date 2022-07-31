//requirements
const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequlizeConnection');

const Comment = sequelizeConnection.define('comment', {
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
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: 'Post',
            key: 'id'
        }
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: 'User',
            key: 'id'
        }
    }
},
{
    sequelize:sequelizeConnection,
    timestamp: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments'
});

User.beforeCreate (async user => {
    user.password = await bcrypt.hash(user.password, 10);
})

module.exports = Comment;