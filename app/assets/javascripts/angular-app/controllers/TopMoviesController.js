function TopMoviesController($stateParams, MoviesService){
  var ctrl = this;

  MoviesService.getTopMovies()
                .then(function(res){
                   ctrl.data = res.data;
                });

  ctrl.addMovie = function(){
      var movie = {display_title: ctrl.displayTitle, mpaa_rating: ctrl.displayRating, summary_short: ctrl.summaryShort};

      MoviesService.postNewMovie(movie).then(function(response) {
        ctrl.data.value.data.push(movie);
      })

      ctrl.new_message = "This movie has been added.";
  }

  ctrl.getMovies = function(){
    MoviesService.getTopMovies();
  }

};

TopMoviesController.$inject = ['$stateParams', 'MoviesService'];

angular
    .module('app')
    .controller('TopMoviesController', TopMoviesController);