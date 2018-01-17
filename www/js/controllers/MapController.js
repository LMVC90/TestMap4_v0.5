    (function(){
    angular.module('starter')
    .controller('MapCtrl', MapCtrl);

    function MapCtrl($scope,$ionicLoading){
        
        // The JSON data
var json = {"Transporte":[
{id: 1, latitude: '-38.749346', longitude: '-72.617441', descripcion: 'Fletes Tío Emilio'},
{id: 2, latitude: '-38.748816', longitude: '-72.617917', descripcion: 'Viajes Especiales'},
{id: 3, latitude: '-38.749038', longitude: '-72.616695', descripcion: 'Alfombra Mágica'}],
            "Soporte":[
{id: 1, latitude: '-38.748566', longitud: '-72.617948', descripcion: 'ElectroUfro'},
{id: 2, latitude: '-38.748709', longitud: '-72.61719', descripcion: 'TecCom'},
{id: 3, latitude: '-38.74911', longitud: '-72.617116', descripcion: 'TecnoMan'}],
            "Construccion":[
{id: 1, latitud: '-38.748605', longitud: '-72.616688', descripcion: 'ConstruMan'},
{id: 2, latitud: '-38.748194', longitud: '-72.617613', descripcion: 'El Clavo Feo'},
{id: 3, latitud: '-38.74935', longitud: '-72.617857', descripcion: 'Martillos Thor'}
            ]};


        $scope.mapCreated = function(map) {
            $scope.map = map;

          };

          $scope.centerOnMe = function () {
            console.log("Centering");
            if (!$scope.map) {
              return;
            }

        $scope.loading = $ionicLoading.show({
          content: 'Obteniendo tu Posición...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function (pos) {
          console.log('Got pos', pos);
          var lugar = ({lat: pos.coords.latitude, lng: pos.coords.longitude});
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
          console.log(lugar);

           var marker = new google.maps.Marker({
          position: lugar,
          map: $scope.map,
          title: "Mi Ubicacion"
        });


        }, function (error) {
          alert('Unable to get location: ' + error.message);
        });


      };

       }        

})();