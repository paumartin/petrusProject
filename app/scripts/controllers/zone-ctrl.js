'use strict';

var ZoneCtrl = function($scope,$location, dataService) {

    $scope.zones = dataService.getZones();
    
};

angular.module('petrusProjectApp')
.controller('ZoneCtrl', ['$scope', '$location', 'dataService', ZoneCtrl]);
