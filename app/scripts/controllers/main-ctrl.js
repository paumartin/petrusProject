'use strict';

var MainCtrl = function($scope, $location, DataService, ZoneService, $http) {

	$http.get('http://localhost:8000/data').then(
        function success(data) {
        	$scope.zones = [];
            var results = data.data.split("<li>").length - 2;
            for (var i = 0; i < results; i++) {
            	ZoneService.getZone(i + 1).then(
            		function success(response) {
            			console.log(response.data);
            			$scope.zones[i] = response.data;
            		}
            	);
            }
        }, function error(data) {   
        }
    );

    $scope.goToZone = function(id){
      $location.path( '/zone/'+id );
    };
};

angular.module('petrusProjectApp')
.controller('MainCtrl', ['$scope', '$location', 'DataService', 'ZoneService', '$http', MainCtrl]);
