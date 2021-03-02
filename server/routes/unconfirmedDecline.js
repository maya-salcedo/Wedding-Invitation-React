var express = require('express');
var router = express.Router();

/* GET unconfirmed-decline page */
router.get("/", function (req, res, next) {
  res.json({
    "unconfirmed": {
      "title": "Ooops... Technical Error!",
      "message1": "Sorry. Looks like we are having some technical problem here.", 
      "message2": "Please contact us at:"
    },
    "contact": {
      "email": "maya.salcedo@yahoo.com",
      "phone": "+358408014077",
      "whatsapp": "+358408014077"
    }
})
});

module.exports = router;