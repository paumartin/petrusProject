'use strict';

var MainCtrl = function($scope, dataService) {

    $scope.zones = dataService.getZones();

};

angular.module('petrusProjectApp')
.controller('MainCtrl', ['$scope', 'dataService', MainCtrl]);
