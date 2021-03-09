const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = 'FILL UP';
const CLIENT_SECRET = 'FILL UP';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = 'FILL UP';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendEmail = async (guestEmail) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'FILL UP',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      }
    });

    const mailOptions = {
      from: 'emanuele.maya.wedding@gmail.com',
      to: guestEmail,
      cc: 'maya.salcedo@yahoo.com, colturi.emanuele@gmail.com',
      subject: 'WAKE UP!!!!',
      text: 'Amelia needs a playmate :D , if you get this email then nodemailer works.'
    };
    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = sendEmail;
