const insta = angular.module('insta', ['routes'])


insta.controller('mainController', function($scope, $http) {
    $http.get('/images')
        .then(({data}) => {
            console.log(data);
            $scope.images = data
        })
        .catch(err => {
            $scope.imageError = 'something went wrong with data fetch'
        })
});

insta.controller('singleImageController', function() {

})
