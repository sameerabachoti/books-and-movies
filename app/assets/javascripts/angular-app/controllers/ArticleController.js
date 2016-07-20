function ArticleController(article, $stateParams, ArticlesService, $routeProvider){
  /*var ctrl = this;
  ctrl.data = article.getArticle(article).$$state;
  console.log(ctrl.data);*/
};

ArticleController.$inject = ['ArticlesService'];

angular
    .module('app')
    .controller('ArticleController', ArticleController);