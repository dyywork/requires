define(['angular'], function (angular) {
  'use strict'

  var infoSerive = function () {
    var json = {};
    return {
      save: function (key, value) {
        json[key] = value;
      },
      get: function (key) {
        return json[key];
      }
    }
  }
  infoSerive.$inject = [];
  return infoSerive;
})
