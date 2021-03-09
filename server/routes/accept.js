var express = require('express');
const pool = require("../db");
var router = express.Router();
require('dotenv').config();
const nodemailer = require('nodemailer');


/* GET accept page */
router.get("/", function (req, res, next) {
  if(req.query.it){
    return res.json({
      "title": "Accetto con Piacere",
      "respondByDate": "Rispondi entro il 31 Maggi 2021",
      "yourName": "Il Tuo Nome:",
      "yourName": "Nome",
      "phone": "Telefono:",
      "phone1": "Telefono",
      "additionalNames" : "Nome dell'Ospite Aggiuntivo:",
      "additionalNames1": "Nome",
      "yourMessage" : "Scrivi un messaggio:",
      "yourMessage1": "Scrivi un messaggio: (opzione)",
      "yourResponse": "Accetto"
    })
  }
  return res.json({
    "title": "Joyfully Accept",
    "respondByDate": "Respond by 31 May 2021",
    "yourName": "Your Name:",
    "yourName1": "Name",
    "phone": "Phone:",
    "phone1": "Phone",
    "additionalNames" : "Additional Guest Names:",
    "additionalNames1": "Name(s)",
    "yourMessage" : "Your message:",
    "yourMessage1": "Your message: (optional)",
    "yourResponse": "Accept"
    }
  )
})

/* POST rsvp page. */
router.post("/", async (req, res) => {
  try {  
    const { Name, Email, Phone, Additional, Message, Response } = req.body;
    console.log(req.body);
    const newResponse = await pool.query("INSERT INTO weddingguestlist(fullname, email, phone, additionalguest, guestmessage, response) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [Name, Email, Phone, Additional, Message, Response]);
    // Uncomment line after to check the unconfirmed page
    // res.status(500).send('Something Went Wrong'); 
    res.json(newResponse.rows[0]);
    const guestEmail =newResponse.rows[0].email;
    console.log(guestEmail);
    
    //Step 1 Nodemailer (see .env file)
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'process.env.EMAIL',
        pass: 'process.env.PASSWORD'
      }
    });

    //Step 2
    let mailOptions = {
      from: 'process.env.EMAIL',
      to: guestEmail,
      cc: 'process.env.HER_EMAIL, process.env.HIS_EMAIL',
      subject: 'Testing and testing',
      text: 'This works fine.'
    };

    //Step 3
    transporter.sendMail(mailOptions, function(err, data){
      if (err) {
        console.log(err);
      } else {
        console.log('Email sent!!');
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something Went Wrong');
  }
});

router.get("/", async (req, res) => {
  try {
    const allResponse = await pool.query("SELECT * FROM guestlist");
    res.json(allResponse.rows);
  } catch (err) {
    console.error(err.message);
  }
});



module.exports = router;