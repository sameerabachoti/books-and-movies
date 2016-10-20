function MoviesService($http){

  this.getTopMovies = function (){
    return $http.get("/movies.json");
  }

  this.getMovie = function(id){
    return $http.get("/movies/" + id + ".json");
  }

  this.postMovieReview = function(review, id){
    return $http.post("/movies/" + id + "/movie_reviews", review);
  }

  this.postMovie = function(movie){
    return $http.post("/users/" + currentUser.id + "/movies", movie);
  }

  this.updateReviewCount = function(movie, review){
    return $http.post("/movies/" + movie.data.value.data.id + "/movie_reviews/" + review.id + ".json", review);
  }

  this.updateUserRatedReviews = function(id, review){
    return $http.post("users/" + id + "/add_rated_review_to_user.json", review);
  }

  this.getCurrentUserMovies = function(id){
    return $http.get("users/" + id + ".json");
  }

  this.postNewMovie = function(movie){
    return $http.post("/movies.json", movie);
  }

  this.editMovie = function(id, movie){
    return $http.put("/movies/" + id + ".json", movie);
  }

  this.deleteMovie = function(movie){
    return $http.delete("/movies/" + movie.id + ".json");
  }
}

MoviesService.$inject = ['$http']

angular
  .module('app')
  .service('MoviesService', MoviesService);