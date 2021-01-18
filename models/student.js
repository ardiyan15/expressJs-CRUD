const Sequelize = require('sequelize')

const sequelize = require('../config/database')

const Students = sequelize.define('students', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nisn: Sequelize.STRING,
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Students