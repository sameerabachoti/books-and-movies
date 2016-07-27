function BookmarkController($scope, $stateParams, ArticlesService){
    var ctrl = this;
    //ctrl.data = ArticlesService.getArticle($stateParams.id).$$state;
    ctrl.currentUser = currentUser;

    ctrl.bookmarkArticle = function(){
      var article = ctrl.data.value.data;
      ArticlesService.postArticle(article).then(function(response){
        ctrl.currentUser.articles.push(article);
      });
    }

    ctrl.getMyArticles = function(){
      ArticlesService.getCurrentUserArticles(currentUser.id).then(function(response){
        ctrl.articles = response.data.articles;
      });
    }
};

ArticleController.$inject = ['$scope', '$stateParams', 'ArticlesService'];

angular
    .module('app')
    .controller('BookmarkController', BookmarkController);