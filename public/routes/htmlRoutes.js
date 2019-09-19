

var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../app/public/add.html"));
    });

    app.get("/add", function(req, res) {
        res.sendFile(path.join(__dirname, "../app/public/add.html"));
    });

    app.get("/all", function(req, res){
        res.sendFile(path.join(__dirname, "../app/public/all.html"));
    });

    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../app/public/login.html"));
    });

};