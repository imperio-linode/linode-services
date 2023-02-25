const express = require('express');
const router = express.Router();
const Logger = require("../utils/Logger");


/* GET users listing. */
router.get('/', function(req, res, next) {
  Logger.infob("got")
  Logger.log(req.keys)
  res.send('respond with a resource');
});

module.exports = router;
