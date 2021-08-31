const express = require('express');
const { insertParticipant, getAllParticipants } = require('../utils/dbqueries');
const router = express.Router();

router.get('/', function (req, res, next) {
  if (req.query.it) {
    return res.json({
      title: 'Declino con Dispiace',
      respondByDate: 'Rispondi entro il 31 Maggi 2021',
      yourName: 'Il Tuo Nome:',
      yourName1: 'Nome',
      phone: 'Telefono:',
      phone1: 'Telefono',
      yourMessage: 'Scrivi un messaggio:',
      yourMessage1: 'Scrivi un messaggio: (opzione)',
      yourResponse: 'Rifiuto',
    });
  }
  return res.json({
    title: 'Decline with Regret',
    respondByDate: 'Respond by 31 May 2021',
    yourName: 'Your Name:',
    yourName1: 'Name',
    phone: 'Phone:',
    phone1: 'Phone',
    yourMessage: 'Your message:',
    yourMessage1: 'Your message: (optional)',
    yourResponse: 'Decline',
  });
});

router.post('/', async (req, res) => {
  try {
    insertParticipant(req.body);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something Went Wrong');
  }
});

router.get('/', async (req, res) => {
  try {
    const allResponse = getAllParticipants;
    res.json(allResponse);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
