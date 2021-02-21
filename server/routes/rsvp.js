var express = require('express');
const pool = require("../db");
var router = express.Router();


/* POST rsvp page. */

router.post("/", async(req, res) => {
    try {
        console.log(req.body)
        const {guest_name} = req.body;
        const newGuestName = await pool.query("INSERT INTO guestlist(guest_name) VALUES ($1) RETURNING *", [guest_name]);
        res.json(newGuestName.rows[0]);

    } catch(err){
        console.error(err.message);
    }
});

router.put("/:guest_id", async(req, res) => {
    try {
        const {guest_id} = req.params; //WHERE
        const {guest_name} = req.body; //SET

        const updateGuestName = await pool.query("UPDATE guestlist SET guest_name = $1 WHERE guest_id = $2", [guest_name, guest_id]);

        res.json(newGuestName.rows[0]);
    } catch(err){
        console.error(err.message);
    }
});

router.delete("/:guest_id", async(req, res) => {
    try {
        const {guest_id} = req.params; 

        const deleteGuestName = await pool.query("DELETE FROM guestlist where guest_id = $1", [guest_id]);

        res.json("Name was removed from guestlist");
    } catch(err){
        console.error(err.message);
    }
});



//ROUTES

//get all guest_name

//get a guest_name

//create a guest_name


//update a guest_name

//delete a guest_name


module.exports = router;