const Sequelize = require('sequelize');
require('dotenv').config();
module.exports = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);
