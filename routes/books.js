var express = require('express');
var router = express.Router();
var Book = require("../models").Book;

//main Books page
router.get('/', function(req, res, next) {
  Book.findAll({
    attributes: ['id', 'title', 'author', 'genre', 'first_published']
  })
  .then(function(books){
    res.render("books/index", {books: books, title: "All Books" });
  })
  .catch(function(error){
      res.send(500, error);
  });
});

//create new Book
router.post('/new', function(req, res, next) {
  Book.create(req.body)
  .then(function(book) {
    return res.redirect("/books/all");
  })
  .catch(function(error){
      res.send(500, error);
  });
});

//new Book form
router.get('/new', function(req, res, next){
  res.render("books/new", {books: {}, title: "New Book" });
});

//get all Books
router.get('/all', (req, res, next) => {
  Book.findAll({
    attributes: ['id', 'title', 'author', 'genre', 'first_published']
  })
  .then(function(books){
    res.render("books/index", {books: books, title: "All Books" });
  })
  .catch(function(error){
      res.send(500, error);
  });
});

//get all Overdue Books
router.get('/overdue', function(req, res, next){
  Book.findById(req.params.id).then(function(books){
    if(books) {
      res.render("books/overdue", {books: books, title: "Overdue Books"});
    } else {
      res.send(404);
    }
  }).catch(function(error){
      res.send(500, error);
   });
  //res.render("books/overdue", {title: "Books" });
});

//get all Checkedout Books
router.get('/checked', function(req, res, next){
  res.render("books/checked", {title: "Books" });
});

//Book Detail
router.get('/detail', function(req, res, next){
  res.render("books/detail", {title: "Books" });
});

module.exports = router;
