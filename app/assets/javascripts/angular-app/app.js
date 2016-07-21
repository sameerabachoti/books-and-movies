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
            })
            .state('businessDay', {
                url: '/businessDay',
                templateUrl: 'businessDay.html',
                controller: function ($stateParams, ArticlesService, $scope, $filter) {
                    $scope.businessDay = [];
                    $scope.data = ArticlesService;
                    console.log($scope.data);
                    $scope.search = 'B';
 
                    $scope.filteredList = $filter('filter')($scope.data, $scope.search);
                    //console.log($scope.filteredList);
                    /*for(var i = 0; i <= $scope.data.length; i++){
                        if($scope.data[i].section.value.data.section == "Business Day"){
                            $scope.businessDay.push($scope.data.section.value.data.section);
                        }
                    }*/
                }
            })
    });

