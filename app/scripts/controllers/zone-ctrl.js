'use strict';

var ZoneCtrl = function($scope, $location, $routeParams, ZoneService) {

    ZoneService.getZone($routeParams.id).then(
    	function success(response) {
    		$scope.zone = response.data;
    	});
};

angular.module('petrusProjectApp')
.controller('ZoneCtrl', ['$scope', '$location', '$routeParams', 'ZoneService', ZoneCtrl]);
