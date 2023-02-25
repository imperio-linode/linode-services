const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.send({elo: "elo"});
});


module.exports = router;
