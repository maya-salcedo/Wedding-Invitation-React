var express = require('express');
var router = express.Router();

/* GET navigation page */
router.get("/", function (req, res, next) {
  if(req.query.it){
    return res.json({
      "home": "HOME",
      "wedding": "INFO",
      "gifts": "REGALI",
      "travel": "LUOGO",
      "rsvp": "RISPONDI"
    })
  }
  return res.json({
    "home": "HOME",
    "wedding": "WEDDING",
    "gifts": "GIFTS",
    "travel": "TRAVEL",
    "rsvp": "RSVP"
  })
})

module.exports = router;