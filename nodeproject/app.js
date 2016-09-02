//get access to the express library
var express = require("express");

//use express in a local instance
var app = express();

//!!! Important: check the express version that is available on C9
//We need a port to listen to where we are developping
var port = process.env.PORT; //use a global C9 variable which assigns a port for us.

//get the static directory for resources plugged in
//express will find all the resources it needs in the mentioned directory
//test the static directory by loading a file in the browser
// e.g. https://nodejs-webapp-andreasmacht.c9users.io/css/agency.css
app.use(express.static('public'));
//which other files to include?
//the html files
app.use(express.static('src/views'));
//add another static route for bower components
app.use(express.static('bower_components'));
//adding a GET request handler
app.get("/", function(req, res){
    res.send("Aloha world!");
});

app.get("/routing", function(req, res){
    res.send("Aloha routing!");
});

//let express listen to the port
app.listen(port, function(err){
    console.log(("The server is running on a different port: " + port));
});
