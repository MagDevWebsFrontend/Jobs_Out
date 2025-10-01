const { Sequelize } = require("sequelize");
const dbConfig = require("./config");

// Se toma el entorno actual, por defecto "development"
const env = process.env.NODE_ENV || "development";
const config = dbConfig[env];

// Instancia de Sequelize
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: config.logging,
  }
);

module.exports = sequelize;
