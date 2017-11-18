angular.module('instaService', [])

.service('instaService', function($http) {
    this.getImages = () => {
        return $http.get('/images')
            .then(({data}) => data)
            .catch(err => err)
    }

    this.getImage = (imageId) => {
        console.log("running getImage", imageId);
        return $http.get(`/getImage/${imageId}`)
            .then(({data}) => data)
            .catch(err => err)
    }

})
