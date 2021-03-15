var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.it){
    return res.json({
      'groom': 'Emanuele',
      'bride': 'Maya',
      'event': 'SI SPOSANO'
    })
  }
  return res.json({
    'groom': 'Emanuele',
    'bride': 'Maya',
    'event': 'ARE GETTING MARRIED'
  })
});

module.exports = router;
