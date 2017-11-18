angular.module('instaRoutes', ['ui.router', 'instaService'])

.config(function($stateProvider, $locationProvider){
    $locationProvider.hashPrefix('');

    $stateProvider
    .state('home',{
        url: '/',
        views: {
          'main': {
                templateUrl: 'pages/main.html'
            }
        }
    })

    .state('about',{
        url: '/about',
        views: {
            'main': {
                templateUrl: 'pages/about.html'
            },
            '@about': {
                template: '<p>I targeted the unnamed view in about.html</p>'
            }
        }
    })

    .state('singleImage',{
        url: '/image/:imageId',
        views: {
            'main': {
                templateUrl: 'pages/single-image.html',
                controller: function($stateParams, $scope, instaService) {
                    instaService.getImage($stateParams.imageId)
                        .then(image => {
                            console.log("ressssss",image);
                            $scope.image = image
                        })
                }
            }
        }
    });
});
