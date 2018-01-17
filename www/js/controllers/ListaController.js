 angular.module('starter')

.controller('ListaCtrl', ListaCtrl);
    
    function ListaCtrl($scope) {
    $scope.items = [
        {id: 1, titulo: 'Transporte', descripcion: 'arreglo de cañerias'},
        {id: 2, titulo: 'Soporte técnico', descripcion: 'arreglo de sillas'},
        {id: 3, titulo: 'Construcción', descripcion: 'arreglo de cañerias'},
        {id: 4, titulo: 'Salud', descripcion: 'arreglo de cañerias'},
        {id: 5, titulo: 'Educación', descripcion: 'arreglo de cañerias'}
    ];
}  

	

