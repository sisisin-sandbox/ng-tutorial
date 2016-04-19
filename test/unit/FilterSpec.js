var assert = require('power-assert');
require('angular-mocks');
var ngModule = angular.mock.module;
var inject = global.angular.mock.inject;

describe('filter', () => {
  beforeEach(ngModule('phonecatFilters'));
  describe('checkmark', () => {
    it('should convert "true" to unicode checkmark', inject(checkmarkFilter => {
      assert(checkmarkFilter(true) === '\u2713');
    }));
    it('should convert "false" to unicode cross', inject(checkmarkFilter => {
      assert(checkmarkFilter(false) === '\u2718');
    }));
  });
});
