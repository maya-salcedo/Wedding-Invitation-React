

var express = require('express');
var router = express.Router();

/* GET wedding page. */
router.get('/', function(req, res, next) {
  if(req.query.it){
    return res.json({
      "invite": "Siamo lieti di invitarvi al nostro matrimonio",
      "date": "09 Luglio 2021",
      "time": "ore 10:30, Venerdì",
      "church" : {
        "name": "Parrocchia Di Sant' Ambrogio",
        "addressLine1": "Via Papa Giovanni XXIII 41, 23827",
        "addressLine2": "Lierna (LC)",
        "churchLink": "https://www.google.com/maps/place/Parrocchia+di+Sant'Ambrogio/@45.9504797,9.165657,35353m/data=!3m1!1e3!4m12!1m6!3m5!1s0x478419b1dbea473b:0x161f24827dd8d39f!2sParrocchia+di+Sant'Ambrogio!8m2!3d45.9570507!4d9.3037132!3m4!1s0x478419b1dbea473b:0x161f24827dd8d39f!8m2!3d45.9570507!4d9.3037132"
      },
      "restaurant" : {
        "reception": "Ricevimento presso",
        "name": "Ristorante La Breva",
        "addressLine1": "Via Roma 24",
        "addressLine2": "Lierna (LC)",
        "restaurantLink": "https://www.google.com/maps/place/La+Breva/@45.96245,9.2180524,27652m/data=!3m1!1e3!4m5!3m4!1s0x478419b37932e433:0x4ec1b4c17cf9466d!8m2!3d45.9504967!4d9.3016596"
      },
      "dining": {
        "line1": "Dopo la cerionia saremmo lieti di intrattenere parenti ed amici presso Ristorante La Breva via Roma 24 Lierna."
      },
      "dresscode": {
        "line1": "Dress Code: Abito da Ceremonia"}
    })
  }
  return res.json({
    "invite": "You are joyfully invited to our wedding on",
    "date": "09 July 2021",
    "time": "10:30 a.m. Friday",
    "church" : {
      "name": "Parrocchia Di Sant' Ambrogio",
      "addressLine1": "Via Papa Giovanni XXIII 41, 23827 Lierna",
      "addressLine2": "Province of Lecco, Italy",
      "churchLink" : "https://www.google.com/maps/place/Parrocchia+di+Sant'Ambrogio/@45.9504797,9.165657,35353m/data=!3m1!1e3!4m12!1m6!3m5!1s0x478419b1dbea473b:0x161f24827dd8d39f!2sParrocchia+di+Sant'Ambrogio!8m2!3d45.9570507!4d9.3037132!3m4!1s0x478419b1dbea473b:0x161f24827dd8d39f!8m2!3d45.9570507!4d9.3037132"
    },
    "restaurant" : {
      "reception": "Reception to follow at",
      "name": "Ristorante La Breva",
      "addressLine1": "Via Roma 24, Lierna",
      "addressLine2": "Province of Lecco, Italy",
      "restaurantLink": "https://www.google.com/maps/place/La+Breva/@45.96245,9.2180524,27652m/data=!3m1!1e3!4m5!3m4!1s0x478419b37932e433:0x4ec1b4c17cf9466d!8m2!3d45.9504967!4d9.3016596"
    },
    "dining": {
      "line1": "After the church ceremony, please proceed to the reception venue.",
      "line2": "Aperitif will be served on the restaurant's veranda followed by a sit down lunch in the function hall.",
      "line3": "Please let us know of any special dietary requirements you may have."
    },
    "dresscode": {
      "line1": "Dress Code is semi-formal.",
      "line2": "Suit and tie. Cocktail or long dress.",
      "line3": "Dress real pretty, dress real fine, dress for comfort, dress for fun.",
      "line4": "'Cause it's a party, when all's said and done."
    }
  })
});

module.exports = router;
