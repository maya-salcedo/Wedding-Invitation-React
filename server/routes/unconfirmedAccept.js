var express = require('express');
var router = express.Router();

/* GET unconfirmed-accept page */
router.get("/", function (req, res, next) {
  if(req.query.it){
    res.json({
      "unconfirmed": {
        "title": "Ooops... Technical Error!",
        "message1": "Sorry for this technical issue.",
        "message2": "Please contact us to confirm your acceptance of invitation."
      },
      "contact": {
        "email": "colturi.emanuele@gmail.com",
        "phone": "+358408093991",
        "whatsapp": "+358408093991"
      }
    })
  }
  res.json({
    "unconfirmed": {
      "title": "Ooops... Technical Error!",
      "message1": "Sorry for this technical issue.",
      "message2": "Please contact us to confirm your acceptance of invitation."
    },
    "contact": {
      "email": "maya.salcedo@yahoo.com",
      "phone": "+358408014077",
      "whatsapp": "+358408014077"
    }
})
});

module.exports = router;