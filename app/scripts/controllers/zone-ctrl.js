'use strict';

var ZoneCtrl = function($scope, $location, $routeParams, dataService) {

    $scope.zone = dataService.getZone($routeParams.id);

};

angular.module('petrusProjectApp')
.controller('ZoneCtrl', ['$scope', '$location', '$routeParams', 'dataService', ZoneCtrl]);
