var express = require('express');
var router = express.Router();

/* GET  confirmed-accept page */
router.get("/", function (req, res, next) {
  if(req.query.it){
    res.json({
      "confirmed": {
        "title": "Awesome!",
        "message1": "Can't wait to celebrate with you on our wedding day. Thank you so much from the bottom of our hearts.",
        "information": {
          "date": "Friday, 09 July 2021",
          "place": "Lierna, Italy"
        },
        "message2": "A confirmation email or text message will be sent to you. Please contact us if you don't hear from us or in case you need to cancel your rsvp."
      },
      "contact": {
        "email": "colturi.emanuele@gmail.com",
        "phone": "+358408093991",
        "whatsapp": "+358408093991"
      }
    })
  }
  res.json({
    "confirmed": {
      "title": "Awesome!",
      "message1": "Can't wait to celebrate with you on our wedding day. Thank you so much from the bottom of our hearts.",
      "information": {
        "date": "Friday, 09 July 2021",
        "place": "Lierna, Italy"
      },
      "message2": "A confirmation email or text message will be sent to you. Please contact us if you don't hear from us or in case you need to cancel your rsvp."
    },
    "contact": {
      "email": "maya.salcedo@yahoo.com",
      "phone": "+358408014077",
      "whatsapp": "+358408014077"
    }
});
})

module.exports = router;