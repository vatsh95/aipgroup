var express = require('express');
var router = express.Router();

router.all('/', function(req, res, next){
    res.render('week4web_new.html');
});

module.exports = router;