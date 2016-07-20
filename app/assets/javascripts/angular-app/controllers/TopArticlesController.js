function TopArticlesController(articles){
  var ctrl = this;
  ctrl.data = articles.getMostViewedArticles().$$state;
};

TopArticlesController.$inject = ['ArticlesService'];

angular
    .module('app')
    .controller('TopArticlesController', TopArticlesController);