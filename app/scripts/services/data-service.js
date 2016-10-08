'use strict';

var dataService = function($http,$q){

	var self = this;

	this.zones = [{
		name: 'Zona 1',
		id: '1',
		inf: [{
			title: 'Ordinadors Sala de Formació Planta 2',
			action: [
				'Revisar estat dels perifèrics (teclat, ratolí i altaveus)',
				'Revisar cables de connexió (endoll i cable de connexió a la xarxa)',
				'Revisar ordinadors (Windows, Office, etc.)',
				'Revisar connexió amb el canó i correcte funcionament del projector',
				'Revisar identificació de rosetes',
				'Revisar estat funcionament de rosetes i endolls'
			]
		},
		{
			title: 'Punts de treball Sala de Reunions Planta 2',
			action: [
				'Revisar funcionament de rosetes i endolls',
				'Revisar identificació de rosetes',
				'Revisar connexió amb el canó i correcte funcionament del projector'
			]
		},
		{
			title: 'Punts de treball Fons Infantil Planta 2',
			action: [
				'Revisar funcionament de rosetes i endolls',
				'Revisar identificació de rosetes'
			]
		},
		{
			title: 'Sales de Treball Planta 2',
			action: [
				'Revisar funcionament de rosetes i endolls',
				'Revisar identificació de rosetes'
			]
		},
		{
			title: 'Sales de Treball Planta 1',
			action: [
				'Revisar estat dels perifèrics (teclat, ratolí i altaveus)',
				'Revisar cables de connexió (endoll i cable de connexió a la xarxa)',
				'Revisar identificació rosetes',
				'Revisar ordinadors (Windows, Office, etc.)',
				'Revisar funcionament de rosetes i endolls',
				'Revisar identificació i estat físic de les taules'
			]
		}],
	},
	{
		name: 'Zona 2',
		id: '2',
		inf: [{
			title: 'Ordinadors Planta 1',
			action: [
				'Revisar estat dels perifèrics (teclat, ratolí i altaveus)',
				'Revisar cables de connexió (endoll i cable de connexió a a la xarxa)',
				'Revisar ordinadors (Windows, Office, etc.)',
				'Revisar identificació de rosetes',
				'Revisar funcionament de rosetes i endolls'
			]
		},
		{
			title: 'Ordinadors OPACS Planta 1',
			action: [
				'Revisar estat dels perifèrics (teclat i ratolí)',
				'Revisar cables de connexió (endoll i cable de connexió a la xarxa)',
				'Revisar identificació de rosetes',
				'Revisar funcionament de rosetes'
			]
		},
		{
			title: 'Ordinadors EAL',
			action: [
				'Revisar estat dels perifèrics (teclat, ratolí i altaveus)',
				'Revisar cables de connexió (endoll i cable de connexió a la xarxa)',
				'Revisar ordinadors (Windows, Office, etc.)',
				'Revisar identificació de rosetes'
			]
		},
		{
			title: 'Punts de Treball Planta 1',
			action: [
				'Revisar funcionament de rosetes i endolls',
				'Revisar identificació de rosetes',
				'Revisar identificació i estat físic de les taules'
			]
		}],
	},
	{
		name: 'Zona 3',
		id: '3',
		inf: [{
			title: 'Punts de treball Planta 0',
			action: [
				'Revisar funcionament de rosetes i endolls',
				'Revisar identificació de rosetes',
				'Revisar identificació i estat físic de les taules'
			]
		},
		{
			title: 'Ordinadors OPACS Planta 0',
			action: [
				'Revisar estat dels perifèrics (teclat i ratolí)',
				'Revisar cables de connexió (endoll i cable de connexió a la xarxa)',
				'Revisar identificació de rosetes'
			]
		},
		{
			title: 'Punts de treball Planta 2',
			action: [
				'Revisar funcionament de rosetes',
				'Revisar identificació de rosetes',
				'Revisar identificació i estat físic de les taules'
			]
		},
		{
			title: 'Ordinadors OPACS Planta 2',
			action: [
				'Revisar estat dels perifèrics (teclat i ratolí)',
				'Revisar cables de connexió (endoll i cable de connexió a la xarxa)',
				'Revisar identificació de rosetes'
			]
		}],
	},
	{
		name: 'Zona 4',
		id: '4',
		inf: [{
			title: 'Ordinadors Aula Informàtica del P0-01 al P0-56',
			action: [
				'Revisar estat dels perifèrics (teclat, ratolí i altaveus)',
				'Revisar cables de connexió (endoll i cable de connexió a la xarxa)',
				'Revisar ordinadors (Windows, Office, etc.)',
				'Revisar identificació i funcionament rosetes',
				'Revisar identificació i estat físic de les taules'
			]
		}]
	},
	{
		name: 'zone 5',
		id: '5',
		inf: [{
			title: 'Ordinadors Aula Informàtica del P0-57 al P0-104',
			action: [
				'Revisar estat dels perifèrics (teclat, ratolí i altaveus)',
				'Revisar cables de connexió (endoll i cable de connexió a la xarxa)',
				'Revisar ordinadors (Windows, Office, etc.)',
				'Revisar identificació i funcionament rosetes',
				'Revisar identificació i estat físic de les taules'
			]
		},
		{
			title: 'Rosetes ordinadors Aula d\'Informàtica',
			action: [
				'Revisar estat i identificació rosetes'
			]
		}]
	},
	{
		name: 'zone 6',
		id: '6',
	}
	];

	this.getZones = function(){
		return self.zones;
	};

	this.getZone = function(id){
		return self.zones[id-1];
	};

};

angular.module('petrusProjectApp').service('dataService', ['$http', '$q', dataService]);
