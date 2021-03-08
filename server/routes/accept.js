var express = require('express');
const pool = require("../db");
var router = express.Router();

/* GET accept page */
router.get("/", function (req, res, next) {
  if(req.query.it){
    res.json({
      "title": "Joyfully Accept",
      "respondByDate": "Respond by 31 May 2021",
      "yourName": "Your Name:",
      "yourName": "Name",
      "Phone": "Phone:",
      "Phone1": "Phone",
      "additionalNames" : "Additional Guest Names:",
      "additionalNames1": "Name(s)",
      "yourMessage" : "Your message:",
      "yourMessage1": "Your message: (optional)",
      "yourResponse": "Accept"
    })
  }
  res.json({
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
    console.log(req.body);
    
    //const { Phone, Email, Message, Response } = req.body;
    
    //const newResponse = await pool.query("INSERT INTO guestlist(names, phone, email, message, response) VALUES ($1) RETURNING *", [Name, Phone, Email, Message, Response]);
    // Uncomment line after to check the unconfirmed page
    // res.status(500).send('Something Went Wrong'); 
    res.json(newResponse.rows[0]);
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