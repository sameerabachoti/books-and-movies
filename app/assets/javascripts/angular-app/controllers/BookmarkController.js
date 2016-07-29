function BookmarkController($scope, $stateParams, MoviesService){
    var ctrl = this;

    ctrl.currentUser = currentUser;

    ctrl.getMyMovies = function(){
      MoviesService.getCurrentUserMovies(currentUser.id).then(function(response){
        ctrl.movies = response.data.movies;
      });
    }
};

BookmarkController.$inject = ['$scope', '$stateParams', 'MoviesService'];

angular
    .module('app')
    .controller('BookmarkController', BookmarkController);