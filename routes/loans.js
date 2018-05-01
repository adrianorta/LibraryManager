var express = require('express');
var router = express.Router();
var Loan = require("../models").Loan;

router.get('/', function(req, res, next) {
  Loan.findAll({
    attributes: ['book_id', 'patron_id', 'loaned_on', 'return_by', 'returned_on']
  })
  .then(function(loans){
    res.render("loans/index", {loans: loans, title: "Loans" });
  })
  .catch(function(error){
      res.send(500, error);
  });
});

router.get('/new', function(req, res, next){
  res.render("loans/new", {title: "Loans" });
});

router.get('/all', (req, res, next) => {
  Loan.findAll({
    attributes: ['book_id', 'patron_id', 'loaned_on', 'return_by', 'returned_on']
  })
  .then(function(loans){
    res.render("loans/index", {loans: loans, title: "Loans" });
  })
  .catch(function(error){
      res.send(500, error);
  });
});

router.get('/overdue', function(req, res, next){
  res.render("loans/overdue", {title: "Loans" });
});

router.get('/checked', function(req, res, next){
  res.render("loans/checked", {title: "Loans" });
});

module.exports = router;
