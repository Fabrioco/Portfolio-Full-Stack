const Sequelize = require("sequelize");
require("dotenv").config();

const database = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    ssl: {
      rejectUnauthorized: false
    }
  },
  
);

module.exports = database;
