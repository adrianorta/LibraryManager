var express = require('express');
var router = express.Router();
var Book = require("../models").Book;

router.get('/', function(req, res, next) {
  Book.findAll({order: [["first_published", "DESC"]]}).then(function(books){
    res.render("books/index", {books: books, title: "All Books" });
  }).catch(function(error){
      res.send(500, error);
   });
  //res.render("books/index", {title: "Books" });
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

router.get('/checked', function(req, res, next){
  res.render("books/checked", {title: "Books" });
});

router.get('/detail', function(req, res, next){
  res.render("books/detail", {title: "Books" });
});

module.exports = router;
