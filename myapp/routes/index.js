var express = require('express');
var router = express.Router();

var tweets = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mytwr', tweets: tweets });
});
router.get('login',function(req,res,next){
  res.render('index1',{ title : Mytwr, tweets : tweets });
});
router.post('/', function(req, res, next) {
    tweets.unshift(req.body.tweet);
    res.redirect('/')
});

module.exports = router;
