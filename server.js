var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var fs = require('fs');
var cup = require("./java");
var mysql = require("mysql");
var moment = require('moment');
var moment = require('moment-timezone');

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var Combinatorics = require('js-combinatorics');
var getJSON = require('get-json');

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
  password: "toor",
  database: "world_cup"
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
