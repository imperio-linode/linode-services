const Express = require('express');
const Router = Express.Router();
const Logger = require("../utils/Logger");


/* GET users listing. */
Router.get('/b', function(req, res, next) {
  Logger.info("Got request")
  Logger.log(req.hostname)
  res.send({elo: "elob"});
});

module.exports = () => Router;
