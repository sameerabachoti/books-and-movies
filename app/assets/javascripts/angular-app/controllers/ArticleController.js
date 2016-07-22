function ArticleController($scope, $stateParams, ArticlesService){
    var ctrl = this;
    ctrl.data = ArticlesService.getArticle($stateParams.id).$$state;
    ctrl.submitComment = function(){
      var comment = {article_id: $stateParams.id, content: ctrl.commentContent};
      ArticlesService.postComment(comment, $stateParams.id);
    }
};

ArticleController.$inject = ['$scope', '$stateParams', 'ArticlesService'];

angular
    .module('app')
    .controller('ArticleController', ArticleController);