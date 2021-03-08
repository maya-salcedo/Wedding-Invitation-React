var express = require('express');
var router = express.Router();

/* GET gift page */
router.get("/", function (req, res, next) {
  if(req.query.it){
    res.json({
      "instruction": "Rispondi Entro il",
      "date": "31 Maggi 2021",
      "attending": "Accetto con Piacere",
      "notattending": "Declino con Dispiace"
    })
  }
  res.json({
    "instruction": "Respond by",
    "date": "31 May 2021",
    "attending": "Accept with pleasure",
    "notattending": "Decline with regrets"
  })
})

module.exports = router;