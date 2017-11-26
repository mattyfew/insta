location.hash = '/'

let insta = angular.module('insta', ['instaRoutes', 'instaService', 'instaDirectives'])


insta.controller('mainController', function($scope, $rootScope, instaService) {
    instaService.getImages()
        .then(images => $scope.images = images)
        .catch(err => $scope.imageErr = err)

    $rootScope.$on('upload:success', function() {
        console.log("WAFFLESSS");
    })

});

// insta.controller('singleImageController', function($scope, instaService) {
//
//     instaService.getImage()
//         .then(image => {
//             console.log(image);
//             $scope.image = image
//         })
//         .catch(err => $scope.imageErr = err)
// })
