const express = require('express');
const Router = express.Router();
const Logger = require('../utils/Logger')

/* GET home page. */
Router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

Router.get('/a', function(req, res, next) {
  Logger.info("Got request")
  // Logger.log(req.body)
  res.send({elo: "eloa"});
});


module.exports = Router;
