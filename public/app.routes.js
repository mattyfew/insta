angular.module('routes', ['ui.router'])

  .config(function($stateProvider){
      $stateProvider
          .state('home',{
              url: '/#/',
              views: {
                  'main': {
                      templateUrl: 'pages/main.html'
                  }
              }
          })

          .state('about',{
              url: '/#/about',
              views: {
                  'main': {
                      templateUrl: 'pages/about.html'
                  },
                  '@about': {
                      template: '<p>I targeted the unnamed view in about.html</p>'
                  }
              }
          });
  });
