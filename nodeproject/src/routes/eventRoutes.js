var express = require("express");

//reference to the router too
var eventRouter = express.Router();


//Lets create some events data
var eventsData = [{
        name: 'Event1',
        description: 'The first event',
        date: '2016.01.06',
        time: '1:00pm',
        duration: '1 hour',
        location: {
            streetAdr: '101 Main St',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0,
        },
        capacity: 100,
        },
        {
        name: 'Event2',
        description: 'The second event',
        date: '2016.02.06',
        time: '2:00pm',
        duration: '2 hour',
        location: {
            streetAdr: '202 Main St',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0,
        },
        capacity: 100,
        },
        {
            name: 'Event3',
        description: 'The third event',
        date: '2016.03.06',
        time: '3:00pm',
        duration: '3 hour',
        location: {
            streetAdr: '303 Main St',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0,
        },
        capacity: 100,
        },
        {
        name: 'Event4',
        description: 'The forth event',
        date: '2016.04.06',
        time: '4:00pm',
        duration: '4 hour',
        location: {
            streetAdr: '404 Main St',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0,
        },
        capacity: 100,
        }
        
        ];
//adding the route for the events
eventRouter.route('/')
    .get(function(req, res){
        res.render('events', {
            list: ["First event", "2nd event", "3rd event"],
        //repeat the navbar here in the new pages
            nav: [{Link: 'Services', Text: 'Services'}, 
                {Link: 'Portfolio', Text: 'Portfolio'}, 
                {Link: 'About', Text: 'About'}, 
                {Link: 'Team', Text: 'Team'}, 
                {Link: 'Contact', Text: 'Contact'},
                {Link: 'Events', Text:'Events'}
            ],
            events: eventsData
        });
});

//This is like a child to the first router    
eventRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id;
        res.render('event', {
            list: ["First event", "2nd event", "3rd event"],
        //repeat the navbar here in the new pages
            nav: [{Link: 'Services', Text: 'Services'}, 
                {Link: 'Portfolio', Text: 'Portfolio'}, 
                {Link: 'About', Text: 'About'}, 
                {Link: 'Team', Text: 'Team'}, 
                {Link: 'Contact', Text: 'Contact'},
                {Link: 'Events', Text:'Events'}
            ],
            events: eventsData[id]
        });
})

module.exports = eventRouter;
    
    
    