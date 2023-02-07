require('dotenv').config({
  path: '.env.test'
});

const config = {
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', { pageTittle: 'Test Report' }]
  ],
  collectCoverage: true,
  verbose: true
};

module.exports = config;
