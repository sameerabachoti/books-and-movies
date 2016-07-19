angular
    .module('app', ['ngAnimate', 'ui.router', 'templates'])
    .config(function ($stateProvider) {
        $stateProvider
            /*.state('home', {
                url: '/',
                templateUrl: 'home.html',
                controller: 'TopArticlesController as top',
            })
            .state('sections', {
                url: '/sections',
                templateUrl: 'app/assets/javascripts/angular-app/templates/sections.html',
            })*/
            .state('/home', {
                url: '/',
                templateUrl: 'home.html',
                controller: 'TopArticlesController as top',
                resolve: {
                    articles: function (ArticlesService) {
                         return ArticlesService.getMostViewedArticles();
                    }
                }
            });
    });

