

var express = require('express');
var router = express.Router();

/* GET wedding page. */
router.get('/', function(req, res, next) {
  console.log('GOING HERE')
  res.json({
    'dining': "After the church ceremony, please proceed to the reception venue. Aperitif will be served on the restaurant's veranda followed by a sit down dinner in the function hall. Please let us know of any special dietary requirements you may have. ",
    'dresscode': "Dress Code is semi-formal. Suit and tie. Cocktail dress. Dress real pretty, dress real fine, dress for comfort, dress for fun. 'Cause it's a party, when all's said and done. "
  })
});

module.exports = router;
