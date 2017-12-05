
requirejs.config({
  paths: {
    jquery :          "../lib/js/jquery-2.1.4.min",
    layui:            '../lib/layui/layui.all',
    cordova:          '../cordova',
    ngCordova:        '../ng-cordova',
    angular:          '../lib/ionic/js/angular/angular',
    angularAnimate:   '../lib/ionic/js/angular/angular-animate.min',
    angularSanitize:  '../lib/ionic/js/angular/angular-sanitize.min',
    uiRouter:         '../lib/ionic/js/angular-ui/angular-ui-router.min',
    ionic:            '../lib/ionic/js/ionic',
    ionicAngular:     '../lib/ionic/js/ionic-angular'
  },
  shim: {
    angular :           {exports : 'angular'},
    angularAnimate :    {deps: ['angular']},
    angularSanitize :   {deps: ['angular']},
    uiRouter :          {deps: ['angular']},
    ionic :             {deps: ['angular'], exports : 'ionic'},
    ngCordova:          {deps: ['angular','cordova'],exports:'ngCordova'},
    ionicAngular:       {deps: ['angular', 'ionic', 'uiRouter', 'angularAnimate', 'angularSanitize']}
  },
  priority: [
    'angular',
    'ionic'
  ],
  deps: [
    'bootstrap'
  ]
});
