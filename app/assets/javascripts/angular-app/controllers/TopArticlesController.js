function TopArticlesController(articles){
  console.log(articles.data.results[10].title);
  var ctrl = this;
  ctrl.articles = articles.data.results;
}

angular
    .module('app')
    .controller('TopArticlesController', TopArticlesController);