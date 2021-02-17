var express = require('express');
var router = express.Router();

/* GET gift page */
router.get("/", function (req, res, next) {
  res.json({
    "title": "Contribute to our Honeymoon Fund",
    "message": "We don't need you to bring us gifts, we know plane tickets are expensive and your presence at the wedding is enough! If you really want to give us something, a contribution to our honeymoon fund would be awesome.",
    "account": {
      "name": "May Salcedo",
      "number": "FI29 3939 0050 8098 54",
      "bic": "SBANFIH"
    }
  })
})

module.exports = router;