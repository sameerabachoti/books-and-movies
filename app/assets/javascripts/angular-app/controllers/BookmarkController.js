function BookmarkController($scope, $stateParams, BooksService, MoviesService){
    var ctrl = this;

    ctrl.currentUser = currentUser;

    ctrl.getMyMovies = function(){
      MoviesService.getCurrentUserMovies(currentUser.id).then(function(response){
        ctrl.movies = response.data.movies;
      });
    }

    ctrl.getMyBooks = function(){
      BooksService.getCurrentUserBooks(currentUser.id).then(function(response){
        ctrl.books = response.data.books;
      });
    }
};


BookmarkController.$inject = ['$scope', '$stateParams', 'BooksService', 'MoviesService'];

angular
    .module('app')
    .controller('BookmarkController', BookmarkController);