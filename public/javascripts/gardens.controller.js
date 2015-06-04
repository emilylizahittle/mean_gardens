'use strict';

angular.module('meanGarden')

.controller('CrudGardenCtrl', ['$scope', '$stateParams', '$location', 'Gardens',
	function($scope, $stateParams, $location, Gardens) {
		
		$scope.create = function() {
	
			var garden = new Garden ({
				name: this.name
				address: this.address
			});

			garden.$save(function(response) {
				$scope.garden = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(garden) {
			if ( garden ) { 
				garden.$remove();

				for (var i in $scope.gardens) {
					if ($scope.gardens [i] === garden) {
						$scope.gardens.splice(i, 1);
					}
				}
			} else {
				$scope.garden.$remove(function() {
					$location.path('/');
				});
			}
		};

		$scope.update = function() {
			var garden = $scope.garden;

			garden.$update(function() {
				$location.path('gardens-new/' + garden._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.gardens = Gardens.query();
		};

		$scope.findOne = function() {
			$scope.garden = Gardens.get({ 
				gardenId: $stateParams.gardenId
			});
		};
	}
]);

			
	// .factory('gardens', ['$http', function(){
	//   var g = {
	//     gardens: [{ name:'Dreaming Gardens', address: '5712 32nd Ave', lat: '38', lng: '-129' }]
	//   };
	//   g.getAll = function() {
 //    	return $http.get('/gardens').success(function(data){
 //      angular.copy(data, g.gardens);
 //    })
	// }])

// .controller('NewGardenCtrl', function ($scope, $http) {
	// 	var gardens = [];

	// 	var request = $http.post('api/gardens', garden);
	// 		request.success(function (data) {
	// 		    console.log(data); 
	// 		});
	// 		request.error(function (data) {
	// 		    console.log(data);
	// 		})
				
	// 	$scope.addGarden = function(){
	// 		if(!$scope.name || $scope.name === '') { return; }
	//   	$scope.gardens.push({'$scope.garden'});	
	// 	}

	// 	$scope.removeGarden = function(item) { 
	// 	  var index = $scope.gardens.indexOf(item);
	// 	  $scope.gardens.splice(index, 1);     
	// 	}
	 	
	//  	$scope.getAll = function() {
 //    	return $http.get('/gardens').success(function(data){
 //      angular.copy(data, $scope.gardens);
	//  	});
 //    }	
	// })
	 	 
	//creates new garden, also located in routes folder (?)
	// $scope.createGarden = function () {
	// 	var garden = new Garden(req.body);

	// 	garden.save(function(err, status, data) {
	// 	// 		if (err) {
	// 	// 			console.log(status);
	// 	// 		} else {
	// 	// 			console.log(data);
	// 	// 		};
	// 	// })
	// }

	// 	//post to db 
	// 	$scope.garden = {};
	// 	$http.post('/api/gardens', $scope.garden)
	// 	  .success(function(data){
	// 	  	// $scope.garden = data;
	// 	    console.log(data);
	// 	  })
	// 	  .error(function(status){
	// 	    console.log(status);
	// 		});  			
	// // 		// get from db
	// 		// $http.get('/gardens').success(function(allGardens) {
	// 		//      $scope.gardens = allGardens;
	// 	  //   	});
	//  })							
	})