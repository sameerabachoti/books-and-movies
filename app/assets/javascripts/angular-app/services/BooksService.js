function BooksService($http){

  this.getTopBooks = function (){
    return $http.get("/books.json");
  }

  this.getBook = function(id){
    return $http.get("/books/" + id + ".json");
  }

  this.postBookReview = function(review, id){
    return $http.post("/books/" + id + "/book_reviews", review);
  }

  this.postBook = function(book){
    return $http.post("/users/" + currentUser.id + "/books", book)
  }

  this.getCurrentUserBooks = function(id){
    return $http.get("users/" + id + ".json");
  }

}

BooksService.$inject = ['$http']

angular
  .module('app')
  .service('BooksService', BooksService);