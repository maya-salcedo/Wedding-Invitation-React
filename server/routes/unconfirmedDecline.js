var express = require('express');
var router = express.Router();

/* GET unconfirmed-decline page */
router.get("/", function (req, res, next) {
  res.json({
    "unconfirmed": {
      "title": "Ooops... Technical Error!",
      "message1": "Sorry for this technical issue.", 
      "message2": "Please contact us if you cannot come."
    },
    "contact": {
      "email": "maya.salcedo@yahoo.com",
      "phone": "+358408014077",
      "whatsapp": "+358408014077"
    }
})
});

module.exports = router;