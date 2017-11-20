angular.module('instaService', [])

.service('instaService', function($http, $state) {
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

    this.uploadImage = (title, user, file) => {
        var formData = new FormData();
        formData.append('title', title);
        formData.append('user', user);
        formData.append('file', file)

        return $http({
            url: '/upload-image',
            method: 'POST',
            data: formData,
            headers: { 'Content-Type': undefined },
            transformRequest: angular.identity
        })
        .catch(err => err)
    }

})
