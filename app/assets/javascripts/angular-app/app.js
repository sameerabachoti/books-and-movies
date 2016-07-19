angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('sections', {
                url: '/sections',
                templateUrl: 'app/assets/javascripts/angular-app/templates/sections.html',
            })
            .state('section', {
                url: 'section/:name',
                templateUrl: 'app/assets/javascripts/angular-app/templates/top-articles.html',
                controller: 'TopArticlesController as top',
                resolve: {
                    articles: function (ArticlesService) {
                        //console.log("hey");
                        //console.log(ArticlesService.getMostViewedArticles());
                        return ArticlesService.getMostViewedArticles();
                    }
                }
            });
    });

