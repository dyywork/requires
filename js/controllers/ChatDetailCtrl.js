define(function () {
  'use strict';

  function ctrl($scope, $state,$stateParams,Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  }

  ctrl.$inject = ['$scope', '$state','$stateParams','Chats'];
  return ctrl;

});
