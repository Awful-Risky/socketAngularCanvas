var mongoose = require('mongoose')

var Vector = mongoose.model( "Vector", {
	x: {type: Array},
	y: {type: Array},

})

module.exports = {Vector : Vector}