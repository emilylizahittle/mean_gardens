angular.module('meanGarden')

	// .controller('NewGardenCtrl', function ($scope, $http) {

	// 	var gardens = [];

	// 	//adds garden to page
	// 	$scope.addGarden = function(){
	// 	  $scope.gardens.push({'name':$scope.name, 'address':$scope.address, 'lat':$scope.lat, 'lng':$scope.lng});
	// 	};
			
	// 	// //creates new garden, also located in routes folder (?)
	// 	// $scope.createGarden = function () {
	// 	// 	var garden = new Garden(req.body);

	// 	// 	garden.save(function(err, status, data) {
	// 	// 	// 		if (err) {
	// 	// 	// 			console.log(status)
	// 	// 	// 		} else {
	// 	// 	// 			console.log(data);
	// 	// 	// 		}
	// 	// 	// });
	// 	// };

	// 	//post to db - where does this actually go?
	// 	// $http.post('/gardens', {'name':$scope.name, 'address':$scope.address, 'lat':$scope.lat, 'lng':$scope.lng});
	// 	// 	$scope.garden = '';
			  
	// 		 //  .success(function(data){
	// 		 //    console.log(data);
	// 		 //  });				  
	// 		 //  .error(function(status){
	// 		 //    console.log(status);
	// 			// });  
	// 	// };
			
	// 		// get from db
	// 		// $http.get('/gardens').success(function(allGardens) {
	// 		//      $scope.allGardens = allGardens;
	// 	  //   	});
	//  })							
				

 	.controller('GardenIndexCtrl', function ($scope, $http) {

	 		$scope.$on('mapInitialized', function(event, map) {
	      $scope.map = map;

	    	angular.forEach($scope.gardens, function(value, key) {
	       var marker = new google.maps.Marker({
	         position: new google.maps.LatLng(value.lat, value.lng),
	         map: $scope.map,
	         title: value.name,
	         optimized: false
	       });
	  		})
	    })

  		$scope.hello = "hello";

	  	$scope.gardens = [
	  		{
			  	name: "An Entire Park",
			  	address: "Alamo Square",
			  	lat:"37.776210",
			  	lng: "-122.434312"
		  	},
		  	{
			  	name: "Back Yard Oasis",
			  	address: "Oak Street",
			  	lat:"37.772784",
			  	lng: "-122.439119"
		  	}
	  	];	  	
	});

