const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});

const sequelize = new Sequelize({
    host: process.env.DB_HOST, // localhost
    username: process.env.DB_USER, // postgres
    password: process.env.DB_PASSWORD,
    port: 5432,
    database: process.env.DB, // example
    dialect: 'postgres',
    logging: false
})

module.exports = { sequelize };