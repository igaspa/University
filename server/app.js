const router = require('./src/routers');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errorMiddleware } = require('./src/middleware/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.status(200);
});

module.exports = app;
