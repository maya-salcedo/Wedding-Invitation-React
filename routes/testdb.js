const express = require('express');
const pool = require('../db')

var router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allResponse = await pool.query("SELECT * FROM weddingguestlist");
    res.json(allResponse.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;