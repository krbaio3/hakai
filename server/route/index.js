'use strict';

const express = require('express');
const api = express.Router();
const routes = {
  heroes: {
    url: '/auth/sign-in',
    file: '../api/heroes.mock.json'
  },
  nebular: {
    url: '/auth/sign-in',
    file: '../api/nebular.mock.json'
  }
};

/**
 * Router de Cliente
 */
api.get(routes.heroes.url, (req, res) => {
  res.send(JSON.stringify(require(routes.heroes.file)));
});

api.post(routes.nebular.url, (req, res) => {
  res.send(JSON.stringify(require(routes.nebular.file)));
});

module.exports = api;
