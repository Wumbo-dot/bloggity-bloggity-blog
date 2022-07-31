//requirements
const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequlizeConnection');
const bcrypt = require('bcrypt');
const User = sequelizeConnection.define('user', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len:[3,26],
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [8, 30]
        }
    }
},
{
    sequelize:sequelizeConnection,
    timestamp: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'users'
});

User.beforeCreate (async user => {
    user.password = await bcrypt.hash(user.password, 10);
})

module.exports = User;