angular.module('triumverate').controller('triTroller', [
	'$scope', 
	'$http',
	'$sce', 
	'triFactory', 
	function($scope, $http, $sce, triFactory) {
	//----------Controller.Grabbing from the Factory----------------------
	$scope.test = triFactory.test

	//----------Controller-------------------------------------------------
	init();
	//from : http://danielnill.com/nodejs-tutorial-with-socketio/

	console.log("angular werkin")


	var h = $http;
	var s = $scope;
	s.sce = $sce
	s.lineList = []
	s.clicker= function(){
	h.get('/api/lines/')
		.then(function(returnData){
			// $scope.lineList = returnData
			// console.log("go bananas -->> " , returnData)
			// console.log("Data from server -->>", returnData.data[0].x[0])
			for (var i = 0; i < returnData.data.length; i++){
					var ourString = ""
				for (var j = 0; j<returnData.data[i].x.length; j++){
					var tempX = returnData.data[i].x[j]
				
					var tempY = returnData.data[i].y[j]
					
					var tempString = (tempX + "," + tempY + " ")
					ourString += tempString
					// console.log("inside for loop -->> ",ourString)
				}
			}
			s.lineList.push(ourString)
			// console.log("Pushing -->> ",ourString)
			// console.log(s.lineList[0])
			
			// allLines = []
			// for (var i = 0; i<1; i++) {
			// 	s.tempSVG = '<svg width="800" height = "400" viewPort="0 0 800 400"><polyline  fill="none" stroke = "black" points="' + s.lineList[i] + '">';
			// 	console.log(s.tempSVG)

			// 	s.trustedHTML = $sce.trustAsHtml(s.tempSVG)
			// 	console.log(s.trustedHTML)
			// }
		})
	}
	// });
}]);














