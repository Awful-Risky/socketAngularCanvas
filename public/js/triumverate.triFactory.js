angular.module('triumverate').factory('triFactory', [
	'$http', 
	function($http){

	var test = [0,1,2];


	return {
		test : test
	}
	
}]);