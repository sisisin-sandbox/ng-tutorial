var angular = require('angular');
require('angular-route');
require('angular-resource');

var Ctrl = require('./controller');
var Config = require('./config');
var Filter = require('./filter');
var Service = require('./service');

var phonecatApp = angular.module('phonecatApp',
  ['ngRoute',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices']);
phonecatApp.config(Config);

var phonecatControllers = angular.module('phonecatControllers', []);
phonecatControllers.controller('PhoneListCtrl', Ctrl.PhoneListCtrl);
phonecatControllers.controller('PhoneDetailCtrl', Ctrl.PhoneDetailCtrl);

angular.module('phonecatFilters', []).filter('checkmark', Filter);

angular.module('phonecatServices', ['ngResource']).factory('Phone', Service);
