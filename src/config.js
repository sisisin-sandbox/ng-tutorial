module.exports = [
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
];
