angular.module('instaService', [])

.service('instaService', function($http) {
    this.getImages = () => {
        return $http.get('/images')
            .then(({data}) => data)
            .catch(err => err)
    }

    this.getImage = (imageId) => {
        console.log("running getImage", imageId)
        return $http.get(`/getImage/${imageId}`)
            .then(({data}) => data)
            .catch(err => err)
    }

    this.uploadImage = (file) => {
        console.log("running uploadImage", file)
        return $http.post('/upload-image', file)
            .then(() => console.log("upload successful????"))
            .catch(err => err)
    }

})
