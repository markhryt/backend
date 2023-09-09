const Sequelize = require('sequelize');
require('dotenv').config();

const urlParts = process.env.PG_CONNECTION_STRING.split(':');
const dialect = urlParts[0].replace(/.*(?=postgres)/, 'postgres');
const host = urlParts[2].replace(/\/\/|\/.*/g, '');

module.exports = new Sequelize(process.env.PG_CONNECTION_STRING,
{
  dialect,
  host,
  dialectOptions: {
    ssl: {rejectUnauthorized: false}
  }
}
);