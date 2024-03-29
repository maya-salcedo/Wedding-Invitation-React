const express = require('express');
const pool = require('../db');
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
    const { Name, Email, Phone, Message, Response } = req.body;
    const newResponse = await pool.query(
      `INSERT INTO weddingguestlist(
      fullname, 
      email, 
      phone, 
      guestmessage, 
      response) 
      VALUES($1, $2, $3, $4, $5) 
      RETURNING *`,
      [Name, Email, Phone, Message, Response]
    );
    const guestDetail = newResponse.rows[0];
    console.log(guestDetail);
    res.json(guestDetail);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something Went Wrong');
  }
});

router.get('/', async (req, res) => {
  try {
    const allResponse = await pool.query('SELECT * FROM guestlist');
    return allResponse.rows;
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
