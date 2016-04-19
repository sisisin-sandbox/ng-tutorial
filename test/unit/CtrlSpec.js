var assert = require('power-assert');
require('angular-mocks');
var ngModule = angular.mock.module;
var inject = global.angular.mock.inject;

describe('PhoneListCtrl', function () {
  var scope, ctrl, $httpBackend;
  beforeEach(() => {
    ngModule('phonecatApp');
    inject((_$httpBackend_, $rootScope, $controller) => {
      $httpBackend = _$httpBackend_;
      $httpBackend
        .expectGET('public/phones/phones.json')
        .respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
      scope = $rootScope.$new();
      ctrl = $controller('PhoneListCtrl', { $scope: scope });
    });
  });
  it('should create "phones" model with 3 phones', () => {
    $httpBackend.flush();
    assert.deepEqual(scope.phones, [{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
  });
  it('should create "phones" model with age', () => {
    assert(scope.orderProp === 'age');
  });
});
describe('PhoneLDetailCtrl', function () {
  var scope, ctrl, $httpBackend;
  beforeEach(() => {
    ngModule('phonecatApp');
    inject((_$httpBackend_, $rootScope, $routeParams, $controller) => {
      $httpBackend = _$httpBackend_;
      $httpBackend
        .expectGET('public/phones/xyz.json')
        .respond({ name: 'Motorola DROID' });
      $routeParams.phoneId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller('PhoneDetailCtrl', { $scope: scope });
    });
  });
  it('should fetch phone detail', () => {
    assert(scope.phone === undefined);
    $httpBackend.flush();
    assert.deepEqual(scope.phone, { name: 'Motorola DROID' });
  });
});
