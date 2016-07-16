function ArticlesService($http){
  this.getMostViewedArticles = function (){
    return $http.get("http://api.nytimes.com/svc/mostpopular/v2/mostemailed/all-sections/1.json?api-key=087609e876114f51890cbd02598c33fc");
  }
}

angular
  .module('app')
  .service('ArticlesService', ArticlesService);