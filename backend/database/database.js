const Sequelize = require('sequelize');
require('dotenv').config();

module.exports = new Sequelize(
  process.env.PG_CONNECTION_STRING,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);
