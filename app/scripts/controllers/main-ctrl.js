'use strict';

var MainCtrl = function($scope,$location, dataService) {

    $scope.zones = dataService.getZones();

    $scope.goToZone = function(id){
      $location.path( '/zone/'+id );
    }
};

angular.module('petrusProjectApp')
.controller('MainCtrl', ['$scope', '$location', 'dataService', MainCtrl]);
