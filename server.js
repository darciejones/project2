// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

db = require("./app/models")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));

// Routes
require("./app/routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./app/routes/html-routes.js")(app);

db.sequelize.sync({force:false}).then(function () {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
      });
      
  })
// Starts the server to begin listening
