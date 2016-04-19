var assert = require('power-assert');
require('angular-mocks');
var ngModule = angular.mock.module;
var inject = global.angular.mock.inject;

describe('PhoneListCtrl', function () {
  beforeEach(ngModule('phonecatApp'));
  it('should create "phones" model with 3 phones', inject(function ($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListCtrl', { $scope: scope });
    assert(scope.phones.length === 3);
  }));
});