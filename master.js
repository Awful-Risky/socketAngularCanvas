//---Server App Requires----------------------------
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');


//---Back-End Controller----------------------------
var triumverateCtrl = require('./controllers/triumverateController.js')

//---Create Express App-----------------------------
var app = express();

//---Application Configuration----------------------
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//---Routes-----------------------------------------
app.get('/', function(req, res){
	res.sendFile('triumverate.html', {root : __dirname + '/public/html'})
});


//---Create Server and Listen for Connections-------

var port = 8080
app.listen(port, function(){
	console.log('triumverate is running on port ' + port);
});