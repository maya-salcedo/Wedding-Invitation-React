const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  if (req.query.it) {
    return res.json({
      instruction: 'Rispondi Entro il',
      date: '31 Maggi 2021',
      attending: 'Accetto con Piacere',
      notattending: 'Declino con Dispiace',
    });
  }
  return res.json({
    instruction: 'Respond by',
    date: '31 May 2021',
    attending: 'Accept with pleasure',
    notattending: 'Decline with regrets',
  });
});

module.exports = router;
