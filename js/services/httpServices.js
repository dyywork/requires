define(['angular'], function (angular) {
  'use strict';

  var httpService = function ($http, $q) {
    var factory = {};
    var urls = "http://222.73.147.33:8082/";
    //正式：139.196.126.54:80    测试：222.73.147.33:8082//  192.168.1.106:8080
    factory.getlist = function (endpoint, method, params) {
      var defer = $q.defer();
      if (method === 'GET') {
        $http({
          url: urls + endpoint,
          method: "GET",
          headers: {'Content-Type': 'application/json'},
          params: params
        }).success(function (data) {
          defer.resolve(data);
        }).error(function (data, status, config) {
          // defer.resolve(data);
          defer.reject(data);
        }).finally(function (data) {
          defer.reject(data)
        });
      } else {
        $http({
          url: urls + endpoint,
          method: method,
          headers: {'Content-Type': 'application/json'},
          data: params
        }).success(function (data) {
          defer.resolve(data);
        }).error(function (data, status, config) {
          // defer.resolve(data);
          defer.reject(data);
        }).finally(function (data) {
          defer.reject(data)
        });
      }
      return defer.promise;
    };
    return factory;
  }
  httpService.$inject = ['$http', '$q'];
  return httpService;
})
