const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendEmail = async (guestDetail) => {
  console.log(guestDetail);
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
      to: guestDetail.email,
      cc: process.env.HER_EMAIL,
      subject: '💒Wedding of Emanuele and Maya',
      html: `
            <h6 style="font-style:italic">In English</h6>
            <p>Ciao ${guestDetail.fullname}!</p>
            <p>Thank you for confirming your RSVP. Please save the date in your calendar. </p>
            <h4>11:30 a.m. Friday, 09 July 2021<br>
            Lierna, Province of Lecco Italy</h4>
            <p> Names of additional guests: ${guestDetail.additionalguest} </p>
            <p>Can't wait to see you!</p>
            <p>Best regards,</p>
            <p>Emanuele ❤️ Maya 
            </p>
            <hr>
            <h6 style="font-style:italic">In Italiano</h6>
            <p>Ciao ${guestDetail.fullname}!</p>
            <p>Grazie per aver confermato il RSVP. Salva questa data nel tuo calendario.</p>
            <h4>Venerdì, 09 Luglio 2021<br>
            ore 11:30<br>
            Lierna (LC) </h4>
            <p>Ospite Aggiuntivo: ${guestDetail.additionalguest} </p>
            <p>Can't wait to see you!</p>
            <p>Best regards,</p>
            <p>Emanuele ❤️ Maya </p>
            `
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
