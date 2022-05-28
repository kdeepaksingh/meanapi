var express = require('express');
var router = express.Router();
var db = require("../db");
// var passport = require('passport');

/* GET users listing. */

// passport.authenticate('jwt', { session: false }), 
//for perticular product purpose if you want to whole product then go for second methods

router.get('/', function(req, res, next) {
    res.json({ name: "Deepak Singh" });
});

module.exports = router;