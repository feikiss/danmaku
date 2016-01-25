var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title:"Pactera Tibco CDC Xi'an Annual party"});
});

module.exports = router;