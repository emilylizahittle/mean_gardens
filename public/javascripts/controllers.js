angular.module('meanGarden')

	.controller('NewGardenCtrl', function ($scope, $http, 'Gardens') {
			
		var gardens = [];

		$scope.createGarden = function () {

		var garden = new.Garden(req.body);
		$scope.gardens.push(garden);

		$http.post('/api/gardens', ($scope.garden}.
			  success(function(data) {
			    console.log(data)
			  }).
			  error(function(status) {
			    console.log(status)
			  });

		// garden.$save(function(response) {		
		// 		$location.path('api/gardens' + response._id);
		// 		$scope.garden = '';
		// 		}, 

		// 		function(errorResponse) {
		// 		$scope.error = errorResponse.data.message;
		// 		}
		// });
		});						

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

