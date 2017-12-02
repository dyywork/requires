define(['angular'], function (angular) {
  "use strict";

  var directive = function (VERSION) {
    console.log(2)
    return function (scope, elm, attrs) {
      elm.text(VERSION);
    };
  };
  console.log(1)
  directive.$inject = ['VERSION'];
  return directive;
});