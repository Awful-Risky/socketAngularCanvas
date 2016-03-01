angular.module('triumverate').controller('triTroller', [
	'$scope', 
	'$http', 
	'triFactory', 
	function($scope, $http, triFactory) {
	//----------Controller.Grabbing from the Factory----------------------
	$scope.test = triFactory.test

	//----------Controller-------------------------------------------------
	init();
	//from : http://danielnill.com/nodejs-tutorial-with-socketio/
	// var socket = io.connect();
	
	// socket.emit('newVector', function(data){
	
	// });

}]);