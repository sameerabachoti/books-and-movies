angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('top', {
                url: '/top',
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

