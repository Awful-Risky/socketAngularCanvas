//---Server App Requires----------------------------
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
// var socketStuff(http vs app.server) = require('');
// var otherSocketStuff = require('');
// var test = ('yes')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Vector')

//---Back-End Controller----------------------------
var triumverateCtrl = require('./controllers/triumverateController.js')

//---Create Express App-----------------------------
var app = express();
var Vector = require("./models/modelVector.js")
//---Application Configuration----------------------
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//---Routes-----------------------------------------
app.get('/', function(req, res){
	console.log("your page is loaded")
	res.sendFile('triumverate.html', {root : __dirname + '/public/html'})
});

app.get('/api/lines/', function getLines (req, res) {
	Vector.Vector.find({}, function (err, docs){
		res.send(docs)
	})
})

app.server = app.listen(8080)
var io = require("socket.io")
var socketServer = io(app.server)

//---Create Server and Listen for Connections-------

socketServer.use(function(socket, next){
	next()
    
})

socketServer.on('connection', function(socket){
    console.log("someone connected")
		socket.on('message', function(data){
			// console.log(data)
			var newLine = new Vector.Vector({
				x : data.x,
				y : data.y
			});

			newLine.save(function (err){			
			if (err) console.log("NO!");

			});
			// console.log('x-->', data.x)
			// console.log('y-->', data.y)
			// data.x = []
			// data.y = []
			// console.log('xNow-->', data.x)
			// console.log('yNow-->', data.y)

			// socketServer.emit('lineSaved')  //Testing$$$$$$$
     	});

		socket.on('disconnection', function(){
        console.log('someone disconnected')
		});
   });

    // socket.join('super cool room')

    // socket.on('', function(data){
    //     console.log(data)
    //     socketServer.emit('myAwesomeCustomEvent', data) // sends message to everyone
    //     socketServer.to('super cool room').emit('myAwesomeCustomEvent', data)
    // })






// })