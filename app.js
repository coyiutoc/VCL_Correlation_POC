// --- LOADING MODULES
var express = require('express');
var body_parser = require('body-parser');

// --- INSTANTIATE THE APP
var app = express();

// Configure body-parser for express
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

// --- STATIC MIDDLEWARE 
app.use(express.static(__dirname + '/public'));
app.use('/jspsych', express.static(__dirname + "/jspsych"));

// --- VIEW LOCATION, SET UP SERVING STATIC HTML
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// --- ROUTING
// Home page
app.get('/', function(request, response) {
    response.render('index.html');
});

// Experiment Routing
app.get('/experiment/:experiment/graph_type/:graph_type/trial_structure/:trial_structure/condition/:condition/balancing/:balancing/subject_id/:subject_id/subject_initials/:subject_initials', function(request, response) {
    
    console.log(request.params);

    let keys = {
        trial_structure: request.params.trial_structure,
        condition: request.params.condition, 
        graph_type: request.params.graph_type,
        balancing: request.params.balancing,
        subject_id: request.params.subject_id,
        subject_initials: request.params.subject_initials
	};

    if (request.params.experiment === "jnd") {
        response.render('jnd/jnd_experiment.html', keys);
    } else if (request.params.experiment === "stevens") {
        response.render('stevens/stevens_experiment.html', keys);
    } else if (request.params.experiment === "jnd_radius") {
    	response.render('jnd_radius/jnd_radius_experiment.html', keys);
    } else if (request.params.experiment === "estimation") {
	    response.render('estimation/estimation_experiment.html', keys);
    }
});


// JND Trial Display
app.get('/jnd_trial', function(request, response) {
    response.render('jnd/jnd_trial_display.html');
});

// JND Radius Display
app.get('/jnd_radius_trial', function(request, response) {
    response.render('jnd_radius/jnd_radius_trial_display.html');
});

// Stevens Trial Display
app.get('/stevens_trial', function(request, response) {
    response.render('stevens/stevens_trial_display.html');
});

// Estimation Trial Display
app.get('/estimation_trial', function(request, response) {
    response.render('estimation/estimation_trial_display.html');
});

// --- START THE SERVER 
var server = app.listen(8080, function(){
    console.log("Listening on port %d", server.address().port);
});
