define(function () {
  'use strict';

  function ctrl($scope, $state) {
    $scope.layui = function () {
      layer.msg('同上', {
        time: 2000
      })
    }
  }

  ctrl.$inject = ['$scope', '$state'];
  return ctrl;

});
