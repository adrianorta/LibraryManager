var express = require('express');
var router = express.Router();
var Book = require("../models").Book;

router.get('/', function(req, res, next) {
  res.render("books/index", {title: "Books" });
});

router.get('/new', function(req, res, next){
  res.render("books/new", {title: "Books" });
});

router.get('/all', (req, res, next) => {
  res.render("books/index", {title: "Books" });
});

router.get('/overdue', function(req, res, next){
  res.render("books/overdue", {title: "Books" });
});

router.get('/checked_out', function(req, res, next){
  res.render("books/index", {title: "Books" });
});

module.exports = router;
