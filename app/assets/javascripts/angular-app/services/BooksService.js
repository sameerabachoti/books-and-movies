function BooksService($http){

  this.getTopBooks = function (){
    return $http.get("/books.json");
  }

  this.getBook = function(id){
    return $http.get("/books/" + id + ".json");
  }
}

BooksService.$inject = ['$http']

angular
  .module('app')
  .service('BooksService', BooksService);