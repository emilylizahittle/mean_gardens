angular.module('meanGarden')


	.controller('GardensShowCtrl', ['$scope','$stateParams', function($scope, $stateParams){
		$scope.garden = gardens.gardens[$stateParams.id];
	}])

	.controller('NewGardenCtrl', function ($scope, $http, $location) {
    
    $scope.gardens = [
    	{
	    	name: $scope.name,
	    	address: $scope.address
    	}
    ];

    $scope.greatGardens = [];

    $http.get('/api/gardens').success(function(greatGardens) {
      $scope.greatGardens = greatGardens;
      // socket.syncUpdates('garden', $scope.greatGardens);
    })
    
    $scope.addGarden = function(){
    	$http.post('/api/gardens', $scope.garden).success(function(data) {
      console.log(data);
      });  
    }

		$scope.removeGarden = function(item) { 
			$http.delete('api/gardens/', $scope.garden).success(function(data) {
      console.log(data);
    });
		  var index = $scope.greatGardens.indexOf(item);
		  $scope.greatGardens.splice(index, 1);     
		}

	})

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

		
			$scope.addGarden = function(){
				if(!$scope.name || $scope.name === '') { return; }
		  	$scope.gardens.push({'name':$scope.name, 'address':$scope.address, 'lat':$scope.lat, 'lng':$scope.lng});
			}

			$scope.removeGarden = function(item) { 
			  var index = $scope.gardens.indexOf(item);
			  $scope.gardens.splice(index, 1);     
			}

			$scope.getAll = function() {
	    	return $http.get('/api/gardens').success(function(data){
	      angular.copy(data, $scope.gardens);
		 	});
    
    }	

	});

