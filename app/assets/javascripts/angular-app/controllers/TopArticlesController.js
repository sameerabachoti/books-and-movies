function TopArticlesController(articles){
  //console.log(articles.data.results[10].title);
  var ctrl = this;
  //ctrl.articles = articles.data.results;
  ctrl.articles = articles.data.results;
  ctrl.temp = 'hey';

  this.showArticle = function(id){
    for (var i = 0; i < articles.data.results.length; i++) {
      if (articles.data.results[i].id === id) {
        return articles.data.results[i];
      }
   }
  }

}

angular
    .module('app')
    .controller('TopArticlesController', TopArticlesController);