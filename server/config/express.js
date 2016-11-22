const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./environments');

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  if (config.env === 'development') {
    // Require can cause performance issues, but this dependency is only used
    // in development mode.
    //eslint-disable-next-line
    const connectLivereload = require('connect-livereload');
    app.use(connectLivereload());
    app.use(express.static(path.join(`${__dirname}/../../app`)));
  }
  // this is used for heroku, same as development environment
  if (config.env === 'stage') { 
    app.use(express.static(path.join(`${__dirname}/../../app`)));
  }
};