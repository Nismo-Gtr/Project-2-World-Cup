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
app.use(express.static("app/public"));


// Routes
// =============================================================


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/home2.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});


app.get("/api/characters", function(req, res) {
  return res.json(characters);
});


app.get("/api/characters/:character", function(req, res) {

});

app.post("/api/characters", function(req, res) {

});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});