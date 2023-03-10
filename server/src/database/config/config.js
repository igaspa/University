const envArg = process.argv.find((x) => x.startsWith('--env'));
const env = envArg ? envArg.split('=')[1] : 'development';
require('dotenv').config({ path: `../../.env.${env}` });
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  stage: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5433,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
