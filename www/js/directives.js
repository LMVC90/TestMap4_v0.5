angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(-38.748854, -72.617397),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map($element[0], mapOptions);
  
        $scope.onCreate({map: map});

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });


//---------------------------------------------------------------------------------------------------
          // The JSON data
      var json = {Transporte:[
        {"id": 1, "latitude": -38.749346, "longitude": -72.617441, "descripcion": " <h4>Fletes Tío Emilio</h4> "},
        {"id": 2, "latitude": -38.748816, "longitude": -72.617917, "descripcion": " <h4>Viajes Especiales</h4> "},
        {"id": 3, "latitude": -38.749038, "longitude": -72.616695, "descripcion": " <h4>Alfombra Mágica</h4> "}],
                  Soporte:[
        {"id": 1, "latitude": -38.748566, "longitude": -72.617948, "descripcion": " <h4>ElectroUfro</h4> "},
        {"id": 2, "latitude": -38.748709, "longitude": -72.61719, "descripcion": " <h4>TecCom</h4> "},
        {"id": 3, "latitude": -38.74911, "longitude": -72.617116, "descripcion": " <h4>TecnoMan</h4> "}],
                  Construccion:[
        {"id": 1, "latitude": -38.748605, "longitude": -72.616688, "descripcion": " <h4>ConstruMan</h4> "},
        {"id": 2, "latitude": -38.748194, "longitude": -72.617613, "descripcion": " <h4>El Clavo Feo</h4> "},
        {"id": 3, "latitude": -38.74935, "longitude": -72.617857, "descripcion": " <h4>Martillos Thor</h4> "}
                ]};

                  console.log(json.Transporte.length);

          for (i=0;i< json.Transporte.length;i++){
             
                createMarker(i);

          }

          function createMarker(i){
              var marker = new google.maps.Marker({
                 position: {lat: json.Transporte[i].latitude, lng: json.Transporte[i].longitude},
                 map: map,
                 clickable: true,
                 title: 'prueba'
                 

        });
              var infowindow = new google.maps.InfoWindow({
                   content: json.Transporte[i].descripcion
          });
           //   marker.addListener('click', function() {
           //  content: 'hola'//json.Transporte[i].descripcion
       // });
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
              });
          }


           




//-----------------------------------------------------------------------------------------------------



      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});
