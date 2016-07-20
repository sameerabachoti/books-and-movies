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
                }
            });
    });

