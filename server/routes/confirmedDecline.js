var express = require('express');
var router = express.Router();

/* GET confirmed-decline page */
router.get("/", function (req, res, next) {
  if(req.query.it){
    return res.json({
      "decline":  {
        "confirmed": {
          "title": "Grazie per averci contattato.",
          "message": "È triste non poter celebrare con voi il nostro matrimonio. Ci vedremo alla prossima occasione quando tutto tornerà alla normalità.",
          "message1": "Con affetto Maya ed Emanuele"
          }
    }})
  }
  return res.json({
    "decline":  {
      "confirmed": {
        "title": "Thank you for your response",
        "message": "It is sad not to have you in one of the most memorable moments of our lives. (Yep, Covid-19 is one to blame for making things complicated.) But see you next time when things get back to normal. Take care!"
        }
  }     
})
});

module.exports = router;