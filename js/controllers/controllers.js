define(function (require) {
  'use strict';

  var angular = require('angular'),
    controllers = angular.module('app.controllers', ['app.services', 'app.config', 'app.directives', 'app.filters']);

  controllers.controller('DashCtrl', require('controllers/DashCtrl'));
  controllers.controller('ChatsCtrl', require('controllers/ChatsCtrl'));
  controllers.controller('ChatDetailCtrl', require('controllers/ChatDetailCtrl'));
  controllers.controller('AccountCtrl', require('controllers/AccountCtrl'));

  controllers.controller('loginCtrl',require('controllers/loginControllers/loginCtrl'));

  controllers.run(['$rootScope', function ($rootScope) {
    $rootScope.sampleParam = "value";
  }]);

  return controllers;

});



