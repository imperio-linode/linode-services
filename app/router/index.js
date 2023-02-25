var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  console.log("Got request")
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  console.log("Got request")
  res.send({elo: "elo"});
});


module.exports = router;
