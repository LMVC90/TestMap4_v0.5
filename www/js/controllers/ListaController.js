 angular.module('starter')

.controller('ListaCtrl', ListaCtrl);
    
    function ListaCtrl($scope) {
    $scope.items = [
        {titulo: 'Transporte', descripcion: 'arreglo de cañerias'},
        {titulo: 'Carpintero', descripcion: 'arreglo de sillas'}
    ];
}  

