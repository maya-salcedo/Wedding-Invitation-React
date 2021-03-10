

var express = require('express');
var router = express.Router();

/* GET wedding page. */
router.get('/', function(req, res, next) {
  if(req.query.it){
    return res.json({
      "invite": "Siamo lieti di invitarvi al nostro matrimonio",
      "date": "09 Luglio 2021",
      "time": "10:30 Venerdì",
      "church" : {
        "name": "Parrocchia Di Sant' Ambrogio",
        "addressLine1": "Via Papa Giovanni XXIII 41, 23827",
        "addressLine2": "Lierna (LC)"
      },
      "restaurant" : {
        "reception": "Ricevimento presso",
        "name": "Ristorante La Breva",
        "addressLine1": "Via Roma 24",
        "addressLine2": "Lierna (LC)"
      },
      "dining": {
        "line1": "Dopo la cerionia saremmo lieti di intrattenere parenti ed amici presso Ristorante La Breva via Roma 24 Lierna."
      },
      "dresscode": {
        "line1": "Dress Code: Semi Formale"}
    })
  }
  return res.json({
    "invite": "You are joyfully invited to our wedding on",
    "date": "09 July 2021",
    "time": "10:30 Friday",
    "church" : {
      "name": "Parrocchia Di Sant' Ambrogio",
      "addressLine1": "Via Papa Giovanni XXIII 41, 23827 Lierna",
      "addressLine2": "Province of Lecco, Italy"
    },
    "restaurant" : {
      "reception": "Reception to follow at",
      "name": "Ristorante La Breva",
      "addressLine1": "Via Roma 24, Lierna",
      "addressLine2": "Province of Lecco, Italy"
    },
    "dining": {
      "line1": "After the church ceremony, please proceed to the reception venue.",
      "line2": "Aperitif will be served on the restaurant's veranda followed by a sit down dinner in the function hall.",
      "line3": "Please let us know of any special dietary requirements you may have."
    },
    "dresscode": {
      "line1": "Dress Code is semi-formal.",
      "line2": "Suit and tie. Cocktail dress.",
      "line3": "Dress real pretty, dress real fine, dress for comfort, dress for fun.",
      "line4": "'Cause it's a party, when all's said and done."
    }
  })
});

module.exports = router;
