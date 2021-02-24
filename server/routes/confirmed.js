var express = require('express');
var router = express.Router();

/* GET thankyoursvp page */
router.get("/", function (req, res, next) {
  res.json({
    "confirmed": {
      "title": "Awesome!",
      "message": "We are excited to see you."
    },
    "unconfirmed": {
      "title": "Ooops there must be some technical problem",
      "message": "Sorry about the inconvenience."
    },
    "contact": {
      "email": "maya.salcedo@yahoo.com",
      "phone": "+358408014077",
      "whatsapp": "+358408014077"
    }
  })
})

module.exports = router;