var express = require('express');
var router = express.Router();

/* GET confirmed-decline page */
router.get("/", function (req, res, next) {
  res.json({
    "decline":  {
      "confirmed": {
        "title": "Thank you for your response.",
        "message": "It is sad not to have you in one of the most memorable moments of our lives. (Yep, Covid-19 is one to blame for making things complicated.) But see you next time when things go back to normal! Take care."
        },
      "contact": {
        "email": "maya.salcedo@yahoo.com",
        "phone": "+358408014077",
        "whatsapp": "+358408014077"
      }
  }     
})
});

module.exports = router;