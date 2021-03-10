const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendEmail = async (guestEmail) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      }
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: guestEmail,
      cc: 'maya.salcedo@yahoo.com, colturi.emanuele@gmail.com',
      subject: 'Testing',
      text: 'If you get this email then nodemailer works.'
    };
    const result = await transport.sendMail(mailOptions);
    console.log("Email sent");
    return result;
    
  } catch (error) {
    console.log("error");
    return error;
  }
}

module.exports = sendEmail;
