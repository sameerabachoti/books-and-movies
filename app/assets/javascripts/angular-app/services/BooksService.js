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

  this.bookmarkBook = function(book){
    return $http.post("/users/" + currentUser.id + "/bookmark.json", book);
  }  

  this.getCurrentUserBooks = function(id){
    return $http.get("users/" + id + ".json");
  }

  this.postNewBook = function(book){
    return $http.post("/books.json", book);
  }

  this.editBook = function(id, book){
    return $http.put("/books/" + id + ".json", book);
  }

  this.deleteBook = function(book){
    return $http.delete("/books/" + book.id + ".json");
  }

}

BooksService.$inject = ['$http']

angular
  .module('app')
  .service('BooksService', BooksService);