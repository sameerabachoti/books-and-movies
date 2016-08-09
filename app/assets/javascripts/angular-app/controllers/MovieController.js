function MovieController($scope, $stateParams, MoviesService){
    var ctrl = this;
    
    /*MoviesService.getMovie($stateParams.id)
                .then(function(res){
                   ctrl.data = res.data;
                });*/
    ctrl.data = MoviesService.getMovie($stateParams.id).$$state;
    ctrl.movies = MoviesService.getTopMovies().$$state;    

    ctrl.submitReview = function(){
      var review = {movie_id: $stateParams.id, content: ctrl.reviewContent, rating: ctrl.reviewRating, user_id: currentUser.id};
      MoviesService.postMovieReview(review, $stateParams.id).then(function(response) {
        ctrl.data.value.data.movie_reviews.push(review)
      })
    }

    ctrl.bookmarkMovie = function(){    
       var movie = ctrl.data.value.data;   
       MoviesService.postMovie(movie).then(function(response){
         currentUser.movies.push(movie);   
       });   
    }

    ctrl.editMovie = function(){
      var movie = {display_title: ctrl.data.value.data.display_title, mpaa_rating: ctrl.data.value.data.display_rating, summary_short: ctrl.data.value.data.summary_short};
      MoviesService.editMovie($stateParams.id, movie).then(function(response) {
        ctrl.movies.value.data.push(movie);
      })
      ctrl.edit_message = "This movie has been edited.";
    }

    ctrl.deleteMovie = function(){
      if (confirm("Are you sure you want to delete this movie?")){
        movie = ctrl.data.value.data;
        MoviesService.deleteMovie(movie).then(function(response) {
          ctrl.movies.value.data.splice(ctrl.movies.value.data.indexOf(movie), 1);
        })
        ctrl.delete_message = "This movie has been deleted.";
     }
     else{
      location.reload();
     }
    }

};

MovieController.$inject = ['$scope', '$stateParams', 'MoviesService'];

angular
    .module('app')
    .controller('MovieController', MovieController);