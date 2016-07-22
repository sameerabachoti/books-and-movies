function ArticlesService($http){
  console.log($http);
  this.getMostViewedArticles = function (){
    return $http.get("/articles.json");
  }

  this.getArticle = function(id){
    return $http.get("/articles/" + id + ".json");
  }

  this.postComment = function(comment, id){
    return $http.post("/articles/" + id + "/comments", comment);
  }
}

ArticlesService.$inject = ['$http']

angular
  .module('app')
  .service('ArticlesService', ArticlesService);