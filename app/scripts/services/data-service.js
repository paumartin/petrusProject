'use strict';

var dataService = function($http,$q){

	this.getZones = function(){
		return [{
      name: 'zone 1'
    },
    {
      name: 'zone 2'
    },
    {
      name: 'zone 3'
    },
    {
      name: 'zone 2'
    },
    {
      name: 'zone 3'
    },
    {
      name: 'zone 2'
    },
    {
      name: 'zone 3'
    },
    {
      name: 'zone 2'
    },
    {
      name: 'zone 3'
    },
    {
      name: 'zone 2'
    },
    {
      name: 'zone 3'
    }
    ];
	};

};

angular.module('petrusProjectApp').service('dataService', ['$http', '$q', dataService]);
