'use strict';

angular.module('meanGarden')

.controller('GardenCrudCtrl', ['$scope', '$stateParams', '$location', 'Gardens',
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