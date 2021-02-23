var express = require('express');
const pool = require("../db");
var router = express.Router();


/* POST rsvp page. */

router.post("/", async(req, res) => {
    try {
        console.log(req.body);
        const {guest_names} = req.body;
        const newGuestName = await pool.query("INSERT INTO guestlist(guest_names) VALUES ($1) RETURNING *", [guest_names]);
        res.json(newGuestName.rows[0]);

    } catch(err){
        console.error(err.message);
    }
});


router.get("/", async(req, res) => {
    try {
        const guests = await pool.query("SELECT * FROM guestlist");
        res.json(guests.rows);
    } catch(err){
        console.error(err.message);
    }
});




module.exports = router;