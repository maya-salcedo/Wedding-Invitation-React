var express = require('express');
var router = express.Router();

/* GET travel page */
router.get("/", function(req, res, next){
    res.json({
        'title': "Accommodation and Transportation",
        'text': "You may stay anywhere in Como Lake area as you desire if you have a rented car to move around. Varenna, 7 km north of Lierna, is a charming place to stay. If you do not want to rent a car, Lecco City is a good place to find accommodation as it has good train connections to Milan City and Malpensa Airport. Lecco City is about 14 km south of Lierna. You can contact us for additional information."
        }
    )
});

module.exports = router;