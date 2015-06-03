angular.module('meanGarden')
	.controller('NewGardenCtrl', function ($scope, $http) {

		var gardens = [];

		//adds garden to page
		$scope.addGarden = function(){
		  $scope.gardens.push({'name':$scope.name, 'address':$scope.address, 'lat':$scope.lat, 'lng':$scope.lng});
		};

	});
			
		// //creates new garden, also located in routes folder (?)
		// $scope.createGarden = function () {
		// 	var garden = new Garden(req.body);

		// 	garden.save(function(err, status, data) {
		// 			if (err) {
		// 				console.log(status)
		// 			} else {
		// 				console.log(data);
		// 			}
		// 	});
		// };

		// post to db - where does this actually go?
		// $http.post('/gardens', {'name':$scope.name, 'address':$scope.address, 'lat':$scope.lat, 'lng':$scope.lng});
		// 	$scope.garden = '';
			  
		// 	  .success(function(data){
		// 	    console.log(data);
		// 	  });				  
		// 	  .error(function(status){
		// 	    console.log(status);
		// 		});  
		// };
			
		// 	get from db
		// 	$http.get('/gardens').success(function(allGardens) {
		// 	     $scope.allGardens = allGardens;
		//     	});
	 // })							
		// 		