const Express = require('express');
const Router = Express.Router();
const Logger = require('../utils/Logger')


Router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

Router.get('/a', function(req, res, next) {
  Logger.info("Got request")
  // Logger.log(req.body)
  res.send({elo: "eloa"});
});

Router.post('/b', function(req, res, next) {
  Logger.info("Got request")
  console.log(req.body)
  Logger.infob(req.body)
  res.send({elo: "eloa"});
});

module.exports = Router;
