var express = require('express');
var router = express.Router();
var Patron = require("../models").Patron;

router.get('/', function(req, res, next) {
  res.render("patrons/index", {title: "Patrons" });
});

router.get('/new', function(req, res, next){
  res.render("patrons/new", {title: "Patrons" });
});

router.get('/all', (req, res, next) => {
  res.render("patrons/all", {title: "Patrons" });
});

router.get('/overdue', function(req, res, next){
  res.render("patrons/overdue", {title: "Patrons" });
});

router.get('/checked_out', function(req, res, next){
  res.render("patrons/checked_out", {title: "Patrons" });
});

module.exports = router;
