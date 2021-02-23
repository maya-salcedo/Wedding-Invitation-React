var express = require('express');
var router = express.Router();

/* GET thankyoursvp page */
router.get("/", function (req, res, next) {
  res.json({
    "title": "Awesome!",
    "message": "We are excited to see you.",
    "cancelation": {
      "email": "maya.salcedo@yahoo.com",
      "phone": "+358408014077",
      "whatsapp": "+358408014077"
    }
  })
})

module.exports = router;