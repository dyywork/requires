define(function (require) {
  'use strict';
  var angular = require('angular'),
    services = require('services/services'),
    config = require('config'),
    controllers = angular.module('app.controllers', ['app.services', 'app.config']);
        controllers.controller('DashCtrl', require('controllers/DashCtrl'));
        controllers.controller('ChatsCtrl', require('controllers/ChatsCtrl'));
        controllers.controller('ChatDetailCtrl', require('controllers/ChatDetailCtrl'));
        controllers.controller('AccountCtrl', require('controllers/AccountCtrl'));

      controllers.run(['$rootScope', function ($rootScope) {
        $rootScope.sampleParam = "value";
      }]);

  return controllers;

});


/*
 angular.module('starter.controllers', [])

 .controller('DashCtrl', function($scope) {})

 .controller('ChatsCtrl', function($scope, Chats) {
 // With the new view caching in Ionic, Controllers are only called
 // when they are recreated or on app start, instead of every page change.
 // To listen for when this page is active (for example, to refresh data),
 // listen for the $ionicView.enter event:
 //
 //$scope.$on('$ionicView.enter', function(e) {
 //});

 $scope.chats = Chats.all();
 $scope.remove = function(chat) {
 Chats.remove(chat);
 };
 })

 .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
 $scope.chat = Chats.get($stateParams.chatId);
 })

 .controller('AccountCtrl', function($scope) {
 $scope.settings = {
 enableFriends: true
 };
 });
 */
