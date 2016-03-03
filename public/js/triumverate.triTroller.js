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

	console.log("angular werkin")


	var h = $http;
	var s = $scope;

	s.lineList = []
	s.clicker= function(){
	h.get('/api/lines/')
		.then(function(returnData){
			// $scope.lineList = returnData
			// console.log("go bananas -->> " , returnData)
			console.log("Data from server -->>", returnData.data[0].x[0])
			for (var i = 0; i < returnData.data.length; i++){
					var ourString = ""
				for (var j = 0; j<returnData.data[i].x.length; j++){
					var tempX = returnData.data[i].x[j]
				
					var tempY = returnData.data[i].y[j]
					
					var tempString = (tempX + "," + tempY + " ")
					ourString += tempString
					console.log("inside for loop -->> ",ourString)
				}
			}
			s.lineList.push(ourString)
			console.log("Pushing -->> ",ourString)
			console.log(s.lineList[0])


		})
}
	// });

}]);