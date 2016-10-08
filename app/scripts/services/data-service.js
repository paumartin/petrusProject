'use strict';

var dataService = function($http,$q){

	var self = this;

	this.zones = [{
		name: 'zone 1',
		id: '1',
		inf: {
			title: '',
			action: [
				'',
				'',
				''
			]
		},
		{
			title: '',
			action: [
				'',
				'',
				''
			]
		},
	},
	{
		name: 'zone 2',
		id: '2'
	},
	{
		name: 'zone 3',
		id: '3'
	},
	{
		name: 'zone 4',
		id: '4'
	},
	{
		name: 'zone 5',
		id: '5'
	},
	{
		name: 'zone 6',
		id: '6'
	}
	];

	this.getZones = function(){
		return self.zones;
	};

};

angular.module('petrusProjectApp').service('dataService', ['$http', '$q', dataService]);
