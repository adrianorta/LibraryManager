var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render("books/index", {title: "Books" });
}).catch(err=> next(err));

router.get('/new', function(req, res, next){
  res.render("books/index", {title: "Books" });
}).catch(err=> next(err));

router.get('/all', (req, res, next) => {
  res.render("books/index", {title: "Books" });
}).catch(err=> next(err));

router.get('/overdue', function(req, res, next){
  res.render("books/index", {title: "Books" });
}).catch(err=> next(err));

router.get('/checkedout', function(req, res, next){
  res.render("books/index", {title: "Books" });
}).catch(err=> next(err));

module.exports = router;
