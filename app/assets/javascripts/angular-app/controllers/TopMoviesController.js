function TopMoviesController(MoviesService){
  var ctrl = this;
  ctrl.data = MoviesService.getMovies().$$state;

  ctrl.addMovie = function(){
     console.log("worked");
      var movie = {display_title: ctrl.displayTitle, summary_short: ctrl.summaryShort};
      console.log(movie);
      MoviesService.postNewMovie(movie).then(function(response) {
        ctrl.data.value.data.push(movie);
      })
    }

};

TopMoviesController.$inject = ['MoviesService'];

angular
    .module('app')
    .controller('TopMoviesController', TopMoviesController);