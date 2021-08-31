const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  if (req.query.it) {
    return res.json({
      unconfirmed: {
        title: 'Ooops... Errore tecnico!',
        message1: 'Ci dispiace per questo problema.',
        message2: " Per favore contattaci per declinare l'invito.",
      },
      contact: {
        email: 'colturi.emanuele@gmail.com',
        phone: '+358408093991',
        whatsapp: '+358408093991',
      },
    });
  }
  return res.json({
    unconfirmed: {
      title: 'Ooops... Technical Error!',
      message1: 'Sorry for this technical issue.',
      message2: 'Please contact us if you cannot come.',
    },
    contact: {
      email: 'maya.salcedo@yahoo.com',
      phone: '+358408014077',
      whatsapp: '+358408014077',
    },
  });
});

module.exports = router;
