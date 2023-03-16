const { createLogger, transports, format } = require('winston');
require('winston-mongodb');

exports.logger = createLogger({
  transports: [
    new transports.MongoDB({
      level: 'error',
      db: process.env.MONGODB,
      options: { useUnifiedTopology: true },
      collection: 'error',
      format: format.combine(format.timestamp(), format.json())
    }),
    new transports.MongoDB({
      level: 'info',
      db: process.env.MONGODB,
      options: { useUnifiedTopology: true },
      collection: 'logs',
      format: format.combine(format.timestamp(), format.json())
    })
  ]
});
