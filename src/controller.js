var Ctrl = {};
Ctrl.PhoneListCtrl =  ['$scope', 'Phone', function ($scope, Phone) {
  $scope.phones = Phone.query();
  $scope.orderProp = 'age'
}];

Ctrl.PhoneDetailCtrl = ['$scope', '$routeParams', 'Phone', function ($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });
  $scope.setImage = (imageUrl) => {
    $scope.mainImageUrl = imageUrl;
  };
}];

module.exports = Ctrl;
