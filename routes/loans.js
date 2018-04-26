var express = require('express');
var router = express.Router();
var Loan = require("../models").Loan;

router.get('/', function(req, res, next) {
  res.render("loans/index", {title: "Loans" });
});

router.get('/new', function(req, res, next){
  res.render("loans/new", {title: "Loans" });
});

router.get('/all', (req, res, next) => {
  res.render("loans/all", {title: "Loans" });
});

router.get('/overdue', function(req, res, next){
  res.render("loans/overdue", {title: "Loans" });
});

router.get('/checked_out', function(req, res, next){
  res.render("loans/checked_out", {title: "Loans" });
});

module.exports = router;
