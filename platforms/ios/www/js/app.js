// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider

    .state('app',{
      url:'/app',
      abstract:true,
      templateUrl : 'templates/Main_menu.html',
    })

    .state('app.HOME',{
      url:'/HOME',
      views:{
        'menuContent': {
          templateUrl:'templates/HOME.html'
        }
      }
    })

    .state( 'app.CFP', {
      url: '/CFP',
      views: {
        'menuContent' : {
          templateUrl : 'templates/CFP.html',
          controller : 'CFPCtrl'
        }
      }
    })

    

    .state('app.IMPORTANT_DATES',{
      url:'/IMPORTANT_DATES',
      views: {
        'menuContent' : {
          templateUrl:'templates/IMPORTANT_DATES.html'
        }
      }
    })

    .state('app.SUBMISSIONS',{
      url:'/SUBMISSIONS',
      views: {
        'menuContent' : {
          templateUrl:'templates/SUBMISSIONS.html',
          
        }
      }
    })

    .state('app.REGISTRATION',{
      url:'/REGISTRATION',
      views: {
        'menuContent' : {
          templateUrl:'templates/REGISTRATION.html'
        }
      }
    })

    .state('app.SPONSORS',{
      url:'/SPONSORS',
      views: {
        'menuContent' : {
          templateUrl:'templates/SPONSORS.html'
        }
      }
    })

    .state('app.CONTACT_US',{
      url:'/CONTACT_US',
      views: {
        'menuContent' : {
          templateUrl:'templates/CONTACT_US.html'
        }
      }
    });

    $urlRouterProvider.otherwise('/app/HOME');
});





