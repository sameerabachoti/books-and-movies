function MovieController($scope, $stateParams, MoviesService){
    var ctrl = this;
    ctrl.data = MoviesService.getMovie($stateParams.id).$$state;
    ctrl.currentUser = currentUser;

    ctrl.submitReview = function(){
      var review = {movie_id: $stateParams.id, content: ctrl.reviewContent};
      MoviesService.postMovieReview(review, $stateParams.id).then(function(response) {
        ctrl.data.value.data.movie_reviews.push(review)
      })
    }

    ctrl.bookmarkMovie = function(){    
       var movie = ctrl.data.value.data;   
       MoviesService.postMovie(movie).then(function(response){
         currentUser.movies.push(movie);   
         console.log(currentUser.movies);
       });   
    }
};

MovieController.$inject = ['$scope', '$stateParams', 'MoviesService'];

angular
    .module('app')
    .controller('MovieController', MovieController);