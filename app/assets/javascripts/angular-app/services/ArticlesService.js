function ArticlesService($http){
  //returns the entire JSON object
  //console.log($http.get("http://localhost:3000/articles.json"));
  this.getMostViewedArticles = function (){
    return $http.get("http://localhost:3000/articles.json");
  }
}

//ArticlesService.$inject = ['$http']

angular
  .module('app')
  .service('ArticlesService', ArticlesService);