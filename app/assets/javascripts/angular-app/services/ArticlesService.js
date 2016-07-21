function ArticlesService($http){
  //returns the entire JSON object
  //console.log($http.get("http://localhost:3000/articles.json"));
  var articles = $http.get("/articles.json");
  this.getMostViewedArticles = function (){
    return $http.get("/articles.json");
  }

  this.getArticle = function(id){
    return $http.get("/articles/" + id + ".json");
  }
}

ArticlesService.$inject = ['$http']

angular
  .module('app')
  .service('ArticlesService', ArticlesService);