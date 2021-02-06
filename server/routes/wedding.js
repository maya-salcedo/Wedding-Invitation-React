

var express = require('express');
var router = express.Router();

/* GET wedding page. */
router.get('/', function(req, res, next) {
  res.json({
    "invite": "You are joyfully invited to our wedding on",
    "date": "09 July 2021",
    "time": "3:00 P.M. Friday",
    "church" : {
      "name": "Parrocchia Di Sant' Ambrogio",
      "addressLine1": "Via Papa Giovanni XXIII 41, 23827 Lierna",
      "addressLine2": "Province of Lecco, Italy"
    },
    "restaurant" : {
      "name": "Ristorante La Breva",
      "addressLine1": "Via Roma 24, Lierna",
      "addressLine2": "Province of Lecco, Italy"
    },
    "dining": "After the church ceremony, please proceed to the reception venue. Aperitif will be served on the restaurant's veranda followed by a sit down dinner in the function hall. Please let us know of any special dietary requirements you may have.",
    "dresscode": "Dress Code is semi-formal. Suit and tie. Cocktail dress. Dress real pretty, dress real fine, dress for comfort, dress for fun. 'Cause it's a party, when all's said and done. "
  })
});

module.exports = router;
