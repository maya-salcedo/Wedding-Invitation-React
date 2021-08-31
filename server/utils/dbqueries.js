const pool = require('../db');
const sendEmail = require('./sendEmail');

const insertParticipant = async (data) => {
  const { Name, Email, Phone, Additional, Message, Response } = data;
  const newResponse = await pool.query(
    `INSERT INTO weddingguestlist(
      fullname, 
      email, 
      phone, 
      additionalguest, 
      guestmessage, 
      response) 
      VALUES ($1, $2, $3, $4, $5, $6 ) 
      RETURNING *`,
    [Name, Email, Phone, Additional, Message, Response]
  );
  res.json(newResponse.rows[0]);
  const guestDetail = newResponse.rows[0];
  sendEmail(guestDetail);
};

const getAllParticipants = async () => {
  const allResponse = await pool.query('SELECT * FROM guestlist');
  return allResponse.rows;
};

module.exports = { insertParticipant, getAllParticipants };
