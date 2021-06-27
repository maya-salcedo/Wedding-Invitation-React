var express = require('express');
var router = express.Router();

/* GET travel page */
router.get('/', function (req, res, next) {
  if (req.query.it) {
    return res.json({
      title: 'Covid-19 Green Pass',
      text1:
        'Tutti i partecipanti al matrimonio devono essere in possesso della carta verde.',
      text2:
        'La Certificazione viene generata in automatico e messa a disposizione gratuitamente nei seguenti casi:',
      list1:
        'Aver effettuato la prima dose o il vaccino monodose da 15 giorni.',
      list2: 'Aver completato il ciclo vaccinale.',
      list3:
        'Essere risultati negativi a un tampone molecolare o rapido nelle 48 ore precedenti, bambini esclusi fino a 12 anni.',
      list4: '‌Essere guariti da COVID-19 nei sei mesi precedenti.',
    });
  }
  return res.json({
    title: 'Covid-19 Green Pass',
    text1: 'All wedding participants must be in possession of the green card.',
    text2:
      'The Certification is generated automatically and made available free of charge in the following cases:',
    list1:
      '‌Has received the first dose or the single-dose vaccine 15 days before the wedding day.',
    list2: '‌Has completed the vaccination cycle.',
    list3:
      'Has tested negative for a molecular or rapid swab within 48 hours, excluding children up to 12 years.',
    list4: '‌Has been cured from COVID-19 within the past six months.',
  });
});

module.exports = router;
