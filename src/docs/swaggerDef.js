const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'node-express-best-practice-boilerplate API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/varunsingh09/node-express-best-practice-boilerplate/blob/master/LICENSE',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;
