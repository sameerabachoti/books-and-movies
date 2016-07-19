function ArticlesService($http){
  //returns the entire JSON object
  this.getMostViewedArticles = function (section){
    return $http.get("http://api.nytimes.com/svc/topstories/v1/" + section + ".json?api-key=087609e876114f51890cbd02598c33fc");
  }
}

ArticlesService.$inject = ['$http']

angular
  .module('app')
  .service('ArticlesService', ArticlesService);