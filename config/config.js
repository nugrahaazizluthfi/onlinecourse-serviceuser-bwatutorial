require("dotenv").config();

const {
  APP_DB_HOSTNAME,
  APP_DB_NAME,
  APP_DB_USERNAME,
  APP_DB_PASSWORD,
} = process.env;

module.exports = {
  development: {
    username: APP_DB_USERNAME,
    password: APP_DB_PASSWORD,
    database: APP_DB_NAME,
    host: APP_DB_HOSTNAME,
    dialect: "mysql",
  },
  test: {
    username: APP_DB_USERNAME,
    password: APP_DB_PASSWORD,
    database: APP_DB_NAME,
    host: APP_DB_HOSTNAME,
    dialect: "mysql",
  },
  production: {
    username: APP_DB_USERNAME,
    password: APP_DB_PASSWORD,
    database: APP_DB_NAME,
    host: APP_DB_HOSTNAME,
    dialect: "mysql",
  },
};
