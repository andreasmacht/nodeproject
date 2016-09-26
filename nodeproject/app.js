//get access to the express library
var express = require("express");

//use express in a local instance
var app = express();

//!!! Important: check the express version that is available on C9
//We need a port to listen to where we are developping
var port = process.env.PORT; //use a global C9 variable which assigns a port for us.

//Create an event router for Express to show events
var eventRouter = require("./src/routes/eventRoutes");

//get the static directory for resources plugged in
//express will find all the resources it needs in the mentioned directory
//test the static directory by loading a file in the browser
// e.g. https://nodejs-webapp-andreasmacht.c9users.io/css/agency.css
app.use(express.static('public'));
//add another static route for bower components
app.use(express.static('bower_components'));

//which other files to include?
//the html files
//app.use(express.static('src/views')); --> INSTEAD OF app.use the views, for EJS we use a app.set
//Preparing for EJS
app.set('views', './src/views'); //Tell ejs where to find the files we have EJS code in. 
app.set('view engine', 'ejs');
//Tell the app to use the router for Events
app.use('/Events', eventRouter)

//adding a GET request handler
app.get("/", function(req, res){
    //res.send("Aloha world!");
    //use .render for ejs; index is the html page, the list value we pass in as arguments to the index.ejs file, ref. to line 113 there
    res.render('index', {
        list: ["First val", "2nd val", "3rd val"],
        // lets create routes and start by making the nav elements JSON objects, a link needs a href and a text
        nav: [{Link: 'Services', Text: 'Services'}, 
                {Link: 'Portfolio', Text: 'Portfolio'}, 
                {Link: 'About', Text: 'About'}, 
                {Link: 'Team', Text: 'Team'}, 
                {Link: 'Contact', Text: 'Contact'},
                {Link: 'Events', Text:'Events'}
        ]
        
    } );
});

app.get("/routing", function(req, res){
    res.send("Aloha routing!");
});

//let express listen to the port
app.listen(port, function(err){
    console.log(("The server is running on a different port: " + port));
});
