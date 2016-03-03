var mongoose = require('mongoose')
var lines = require('../models/modelVector.js')

function getLines (req, res) {
	lines.find({}, function (err, docs){
		res.send(docs)
	})
}

module.exports = {getLines:getLines}