angular
    .module('app', ['ngAnimate', 'ui.router', 'templates'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.html',
                controller: 'TopArticlesController as top'
            })
            .state('article', {
                url: '/article/:id',
                templateUrl: 'article.html',
                controller: function ($stateParams, ArticlesService, $scope) {
                    $scope.data = ArticlesService.getArticle($stateParams.id).$$state;
                    $scope.submitComment = function(){
                      var comment = {article_id: 1, content: $scope.commentContent};
                      ArticlesService.postComment(comment, $stateParams.id);
                    }
                }
            })
    });

