//This file offers a set of routes for displaying and saving data to the db

var express = require("express");
// Dependencies
// =============================================================
// var Product = require("../modelsold/wiishare.js.js");

db = require("../models")

// Routes
// =============================================================
module.exports = function(app) {

  // If a user sends data to add a new product...
  app.post("/api/new", function(req, res) {
    // Take the request...

     db.Product.create({
       yourName: req.body.yourName,
       product: req.body.product
       
    }).then(function(product) {
      res.json(product);
    });
  })

  app.post("/api/newUser", function(req, res) {
    // Take the request...
     db.users.create({
       userName: req.body.userName,
       address: req.body.address,
       email: req.body.email,
       password: req.body.password
       
    }).then(function(users) {
      res.json(users);
    });
  })

  app.get("/api/all", function(req, res) {
    db.Product.findAll({}).then(function(products) {
     res.json(products);
   });
  })
}

