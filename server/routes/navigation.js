const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  if (req.query.it) {
    return res.json({
      home: 'HOME',
      wedding: 'INFO',
      gifts: 'REGALI',
      travel: 'LUOGO',
      rsvp: 'RISPONDI',
    });
  }
  return res.json({
    home: 'HOME',
    wedding: 'WEDDING',
    gifts: 'GIFTS',
    travel: 'TRAVEL',
    rsvp: 'RSVP',
  });
});

module.exports = router;
