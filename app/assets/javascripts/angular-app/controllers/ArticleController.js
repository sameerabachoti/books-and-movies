function ArticleController($scope, $stateParams, ArticlesService){
    var ctrl = this;
    ctrl.data = ArticlesService.getArticle($stateParams.id).$$state;
    ctrl.currentUser = currentUser;

    ctrl.submitComment = function(){
      var comment = {article_id: $stateParams.id, content: ctrl.commentContent};
      ArticlesService.postComment(comment, $stateParams.id).then(function(response) {
        ctrl.data.value.data.comments.push(comment)
      })
    }

    ctrl.bookmarkArticle = function(){    
       var article = ctrl.data.value.data;   
       ArticlesService.postArticle(article).then(function(response){   
         currentUser.articles.push(article);   
       });   
    }
};

ArticleController.$inject = ['$scope', '$stateParams', 'ArticlesService'];

angular
    .module('app')
    .controller('ArticleController', ArticleController);