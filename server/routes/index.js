var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET wedding page. */
router.get('/wedding', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
