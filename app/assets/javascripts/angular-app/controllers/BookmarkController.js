function BookmarkController($scope, $stateParams, ArticlesService){
    var ctrl = this;

    ctrl.currentUser = currentUser;

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