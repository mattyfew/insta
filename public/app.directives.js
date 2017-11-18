angular.module('instaDirectives', [])

.directive('singleImage', function() {
    return {
        templateUrl: 'directives/single-image.html',
        replace: true,
        scope: { imageInfo: '=' },
        controller: function($scope) {
            console.log($scope);
        }
    }
})
