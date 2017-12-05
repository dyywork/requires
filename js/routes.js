
/*global define, require */

define(['app'], function (app) {
  'use strict';
    app.run(function ($ionicPlatform, $cordovaStatusbar, $ionicPopup, $rootScope, $location, $ionicHistory,  $state) {

    //主页面显示退出提示框
    $ionicPlatform.registerBackButtonAction(function () {

      function showConfirm() {
        var confirmPopup = $ionicPopup.confirm({
          title: '<strong>退出应用?</strong>',
          template: '<div style="text-align: center;font-size: 1.2rem">你确定要退出应用吗?</div>',
          okText: '退出',
          cancelText: '取消'
        });

        confirmPopup.then(function (res) {
          if (res) {
            localStorage.removeItem('channel');
            ionic.Platform.exitApp();
          } else {
            // Don't close
          }
        });
      }

      // Is there a page to go back to?
      if ($location.path() === '/tab/dash' || $location.path() === '/login') {
        showConfirm();
        $('.dw-persp').hide();
      } else if ($ionicHistory.backView()) {
        $ionicHistory.goBack();
        $('.dw-persp').hide();
        Popup.close();
      } else {
        showConfirm();
      }
      return false;
    }, 101);
    /*安卓返回键控制结束*/


    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });

  });

  app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('tab', {
          url: '/tab',
          abstract: true,
          views:{
            'login':{
              templateUrl: 'templates/tabs.html'
            }
          }
        })

        .state('login', {
          url: '/login',
          views: {
            'login': {
              templateUrl: 'templates/login/login.html',
              controller: 'loginCtrl'
            }
          }
        })
        // Each tab has its own nav history stack:

        .state('tab.dash', {
          url: '/dash',
          views: {
            'tab-dash': {
              templateUrl: 'templates/tab-dash.html',
              controller: 'DashCtrl'
            }
          }
        })

        .state('tab.chats', {
          url: '/chats',
          views: {
            'tab-chats': {
              templateUrl: 'templates/tab-chats.html',
              controller: 'ChatsCtrl'
            }
          }
        })
        .state('tab.chat-detail', {
          url: '/chats/:chatId',
          views: {
            'tab-chats': {
              templateUrl: 'templates/chat-detail.html',
              controller: 'ChatDetailCtrl'
            }
          }
        })

        .state('tab.account', {
          url: '/account',
          views: {
            'tab-account': {
              templateUrl: 'templates/tab-account.html',
              controller: 'AccountCtrl'
            }
          }
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');

    }]);


});
