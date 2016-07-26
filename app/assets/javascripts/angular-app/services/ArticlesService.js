function ArticlesService($http){

  this.getMostViewedArticles = function (){
    return $http.get("/articles.json");
  }

  this.getArticle = function(id){
    return $http.get("/articles/" + id + ".json");
  }

  this.postComment = function(comment, id){
    return $http.post("/articles/" + id + "/comments", comment);
  }

  this.postArticle = function(article){
    console.log("post?");
    return $http.post("/users/" + currentUser.id + "/articles", article)
  }
}

ArticlesService.$inject = ['$http']

angular
  .module('app')
  .service('ArticlesService', ArticlesService);