const config = {
  // The proccess.env.NODE_ENV is used for deploy in heroku, development by default
  env: process.env.NODE_ENV || 'development',
  // process.env.PORT is used for deploy in heroku, 9000 by default
  port: process.env.PORT || 9000
};
module.exports = config;
