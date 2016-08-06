function TopMoviesController($stateParams, MoviesService){
  var ctrl = this;
  ctrl.data = MoviesService.getMovies().$$state;

  ctrl.addMovie = function(){
      var movie = {display_title: ctrl.displayTitle, mpaa_rating: ctrl.displayRating, summary_short: ctrl.summaryShort};

      MoviesService.postNewMovie(movie).then(function(response) {
        ctrl.data.value.data.push(movie);
      })

      ctrl.new_message = "This movie has been added.";
  }

};

TopMoviesController.$inject = ['$stateParams', 'MoviesService'];

angular
    .module('app')
    .controller('TopMoviesController', TopMoviesController);