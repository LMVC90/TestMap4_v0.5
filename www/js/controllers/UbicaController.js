 angular.module('starter')
	.controller('CoorCtrl', CoorCtrl);

		function CoorCtrl($scope){
			$scope.Transporte = [
				{latitud: '-38.749346', longitud: '-72.617441', descripcion: 'Fletes Tío Emilio'},
				{latitud: '-38.748816', longitud: '-72.617917', descripcion: 'Viajes Especiales'},
				{latitud: '-38.749038', longitud: '-72.616695', descripcion: 'Alfombra Mágica'}
			];

			$scope.Soporte = [
				{latitud: '-38.748566', longitud: '-72.617948', descripcion: 'ElectroUfro'},
				{latitud: '-38.748709', longitud: '-72.61719', descripcion: 'TecCom'},
				{latitud: '-38.74911', longitud: '-72.617116', descripcion: 'TecnoMan'}
			];

			$scope.Construcción = [
				{latitud: '-38.748605', longitud: '-72.616688', descripcion: 'ConstruMan'},
				{latitud: '-38.748194', longitud: '-72.617613', descripcion: 'El Clavo Feo'},
				{latitud: '-38.74935', longitud: '-72.617857', descripcion: 'Martillos Thor'},
			];
		}