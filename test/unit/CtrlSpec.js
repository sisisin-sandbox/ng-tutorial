var assert = require('power-assert');
require('angular-mocks');
var ngModule = angular.mock.module;
var inject = global.angular.mock.inject;

describe('PhoneCat controlles', () => {
  beforeEach(() => {
    ngModule('phonecatApp');
    ngModule('phonecatServices');
  });

  describe('PhoneListCtrl', function () {
    var scope, ctrl, $httpBackend;
    beforeEach(() => {
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
      assert(angular.equals(scope.phones, [{ name: 'Nexus S' }, { name: 'Motorola DROID' }]));
    });
    it('should create "phones" model with age', () => {
      assert(scope.orderProp === 'age');
    });
  });

  describe('PhoneLDetailCtrl', function () {
    var scope, ctrl, $httpBackend, xyzPhoneDataFactory;
    xyzPhoneDataFactory = () => {
      return {
        name: 'Motorola DROID',
        images: ['image/url1.jpg', 'image/url2.jpg']
      };
    };

    beforeEach(() => {
      inject((_$httpBackend_, $rootScope, $routeParams, $controller) => {
        $httpBackend = _$httpBackend_;
        $httpBackend
          .expectGET('public/phones/xyz.json')
          .respond(xyzPhoneDataFactory());
        $routeParams.phoneId = 'xyz';
        scope = $rootScope.$new();
        ctrl = $controller('PhoneDetailCtrl', { $scope: scope });
      });
    });

    it('should fetch phone detail', () => {
      assert(angular.equals(scope.phone, {}));
      $httpBackend.flush();
      assert(angular.equals(scope.phone, xyzPhoneDataFactory()));
    });
  });
});