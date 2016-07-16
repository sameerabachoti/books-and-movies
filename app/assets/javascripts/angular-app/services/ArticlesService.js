function ArticlesService($http){
  this.getMostViewedArticles = function (){
    return $http.get("http://api.nytimes.com/svc/mostpopular/v2/mostemailed/all-sections/1.json?api-key=***REMOVED***");
  }
}

angular
  .module('app')
  .service('ArticlesService', ArticlesService);