define(function () {
  'use strict';

  function ctrl($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  }

  ctrl.$inject = ['$scope', 'Chats'];
  return ctrl;

});