const express = require('express');
const pool = require('../db')

var router = express.Router();

router.get('/', function(req, res, next) {
  pool.connect(function (err) {
    if (err) throw err;
    pool.query('SELECT $1::text as db', ['works'], function (err, result) {
      if (err) throw err;
      res.json({ result: result.rows });
      pool.end(function (err) {
        if (err) throw err;
      });
    });
  });
});

module.exports = router;