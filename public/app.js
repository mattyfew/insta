let insta = angular.module('insta', ['instaRoutes', 'instaService', 'instaDirectives'])


insta.controller('mainController', function($scope, instaService) {
    instaService.getImages()
        .then(images => $scope.images = images)
        .catch(err => $scope.imageErr = err)
});

insta.controller('singleImageController', function($scope, instaService) {

    instaService.getImage()
        .then(image => $scope.image = image)
        .catch(err => $scope.imageErr = err)
})
