function BooksService($http){

  this.getTopBooks = function (){
    return $http.get("/books.json");
  }

  this.getBook = function(id){
    return $http.get("/books/" + id + ".json");
  }

  this.postComment = function(comment, id){
    return $http.post("/books/" + id + "/comments", comment);
  }

}

BooksService.$inject = ['$http']

angular
  .module('app')
  .service('BooksService', BooksService);