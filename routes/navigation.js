var express = require('express');
var router = express.Router();

/* GET navigation page */
router.get("/", function (req, res, next) {
  if(req.query.it){
    return res.json({
      "home": "HOME",
      "wedding": "INFO",
      "gifts": "REGALI",
      "covid19": "COVID-19",
      "rsvp": "RISPONDI"
    })
  }
  return res.json({
    "home": "HOME",
    "wedding": "WEDDING",
    "gifts": "GIFTS",
    "covid19": "COVID-19",
    "rsvp": "RSVP"
  })
})

module.exports = router; 