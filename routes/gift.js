var express = require('express');
var router = express.Router();

/* GET gift page */
router.get("/", function (req, res, next) {
  if(req.query.it){
    return res.json({
    "title": "Regali",
    "message": "La vostra presenza al nostro matrimonio è il dono più grande di tutti. Se desideri farci un regalo, apprezzeremmo molto un contributo per la nostra luna di miele.",
    "account": {
      "instruction": "Al nostro conto corrente oppure in contanti:",
      "name": "Name: May Salcedo",
      "number": "Account#: FI29 3939 0050 8098 54",
      "bic": "BIC: SBANFIH"
    }
    })
  }
  return res.json({
    "title": "Contribute to our Honeymoon Fund",
    "message": "We don't need you to bring us gifts, we know plane tickets are expensive and your presence at the wedding is enough! If you really want to give us something, a contribution to our honeymoon fund would be awesome.",
    "account": {
      "instruction": "Here's how you can get the money to us:",
      "name": "Name: May Salcedo",
      "number": "Account#: FI29 3939 0050 8098 54",
      "bic": "BIC: SBANFIH"
    }
  })
})

module.exports = router;