var express = require('express');
var router = express.Router();

/* GET confirmed-decline page */
router.get("/", function (req, res, next) {
  if(req.query.it){
    return res.json({
      "decline":  {
        "confirmed": {
          "title": "Grazie per averci contattato.",
          "message": "È triste non poter celebrare con voi il giorno più memorabile della nostra vita. ( Si, Covid-19 è una da incolpare per aver complicato le cose.) Ci vedremo alla prossima quando le cose torneranno alla normalità. Take care!"
          }
    }})
  }
  return res.json({
    "decline":  {
      "confirmed": {
        "title": "Thank you for your response",
        "message": "It is sad not to have you in one of the most memorable moments of our lives. (Yep, Covid-19 is one to blame for making things complicated.) See you next time when things get back to normal. Take care!"
        }
  }     
})
});

module.exports = router;