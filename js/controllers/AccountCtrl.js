define(function () {
  'use strict';

  function ctrl($scope, $state) {
    $scope.settings = {
      enableFriends: true
    };
  }

  ctrl.$inject = ['$scope', '$state'];
  return ctrl;

});