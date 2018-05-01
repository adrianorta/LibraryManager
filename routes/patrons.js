var express = require('express');
var router = express.Router();
var Patron = require("../models").Patron;

router.get('/', function(req, res, next) {
  Patron.findAll({
    attributes: ['first_name', 'last_name', 'address', 'email', 'library_id', 'zip_code']
  })
  .then(function(patrons){
    res.render("patrons/index", {patrons: patrons, title: "Patrons" });
  })
  .catch(function(error){
      res.send(500, error);
  });
});

router.get('/new', function(req, res, next){
  res.render("patrons/new", {title: "Patrons" });
});

router.get('/all', (req, res, next) => {
  Patron.findAll({
    attributes: ['first_name', 'last_name', 'address', 'email', 'library_id', 'zip_code']
  })
  .then(function(patrons){
    res.render("patrons/index", {patrons: patrons, title: "Patrons" });
  })
  .catch(function(error){
      res.send(500, error);
  });
});

router.get('/detail', function(req, res, next){
  res.render("patrons/detail", {title: "Patrons" });
});

module.exports = router;
