const express = require('express');
const logger = require('log4js').getLogger();
const config = require('./config/environments');

const app = express();
const server = app.listen(config.port || 9000, () => {
  logger.info(`App listening in port: ${server.address().port} in ${config.env} mode`);
});

require('./config/express')(app);
require('./routes')(app);
