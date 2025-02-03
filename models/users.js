const {DataTypes} = require('sequelize');
const { password } = require('../config/db.config');

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        lastname: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        emailId: {
            type: DataTypes.STRING,
            notEmpty: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'users'});
    return User;
};