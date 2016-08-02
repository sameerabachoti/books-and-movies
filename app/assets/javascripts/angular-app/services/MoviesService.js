function MoviesService($http){

  this.getMovies = function (){
    return $http.get("/movies.json");
  }

  this.getMovie = function(id){
    return $http.get("/movies/" + id + ".json");
  }

  this.postMovieReview = function(review, id){
    return $http.post("/movies/" + id + "/movie_reviews", review);
  }

  this.postMovie = function(movie){
    return $http.post("/users/" + currentUser.id + "/movies", movie)
  }

  this.getCurrentUserMovies = function(id){
    return $http.get("users/" + id + ".json");
  }

  this.postNewMovie = function(movie){
    console.log("service");
    return $http.post("/movies.json", movie);
  }
}

MoviesService.$inject = ['$http']

angular
  .module('app')
  .service('MoviesService', MoviesService);