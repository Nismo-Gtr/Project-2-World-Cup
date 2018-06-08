
// Dependencies

var path = require("path");

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var fs = require('fs');
var cup = require("./java");
var mysql = require("mysql");
var moment = require('moment');
var moment = require('moment-timezone');
var Combinatorics = require('js-combinatorics');

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.

//app.use(express.static("public"));


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));


// Routes
// =============================================================

app.use('/assets', express.static(path.join(__dirname, './public/assets')))

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./home2.html"));
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




var cDat = cup;


console.log(cDat.groups.a.matches[0].home_team);
console.log(cDat.groups.a.matches[0].away_team);
console.log(cDat.groups.a.matches[0].date);
var centTime0 = moment(cDat.groups.a.matches[0].date); 
console.log(centTime0.tz('America/Chicago').format('ha z'));
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "world_cup",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
 });
 
 connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
 
  console.log("connected as id " + connection.threadId);
 });

connection.query("SELECT name from world_cup.teams WHERE (id=1)", function(err, result) {
  if (err) throw err;
  console.log(result[0].name);
  //res.redirect("/");
});

app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});