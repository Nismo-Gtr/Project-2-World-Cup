// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

// get route for login page
app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "login.html"));
});

// Check for user credentials match
app.post("/authenticate", function (req, res) {
    console.log("POST request - req.body: ", req.body)
    res.send(req.body);
});

app.get("/userDashboard", function (req, res) {
    res.sendFile(path.join(__dirname, "./userDashboard.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});