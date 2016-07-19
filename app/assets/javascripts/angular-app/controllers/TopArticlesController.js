function TopArticlesController(articles){
  console.log(articles);
};

TopArticlesController.$inject = ['ArticlesService'];

angular
    .module('app')
    .controller('TopArticlesController', TopArticlesController);