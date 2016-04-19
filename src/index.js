var angular = require('angular');
require('angular-route');

var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatControllers']);
phonecatApp.config([
  '$routeProvider',
  $routeProvider => {
    $routeProvider
      .when('/phones', {
        templateUrl:'public/partials/phone-list.html',
        controller: 'PhoneListCtrl'
      })
      .when('/phones/:phoneId', {
        templateUrl:'public/partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      })
      .otherwise({ redirectTo: '/phones'});
  }
]);

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('public/phones/phones.json')
    .success(data => {
      $scope.phones = data;
    });
  $scope.orderProp = 'age'
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
  $http.get('public/phones/' + $routeParams.phoneId + '.json')
    .success(data => {
      $scope.phone = data;
    });
}]);
