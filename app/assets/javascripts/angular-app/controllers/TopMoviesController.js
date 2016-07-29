function TopMoviesController(movies){
  var ctrl = this;
  ctrl.data = movies.getMovies().$$state;
};

TopMoviesController.$inject = ['MoviesService'];

angular
    .module('app')
    .controller('TopMoviesController', TopMoviesController);