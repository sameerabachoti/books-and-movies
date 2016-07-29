angular
    .module('app', ['ngAnimate', 'ui.router', 'templates'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('movies', {
                url: '/movies',
                templateUrl: 'movies.html',
                controller: 'TopMoviesController as movies'
            })
            .state('movie', {
                url: '/movies/:id',
                templateUrl: 'movie.html',
                controller: 'MovieController as movie'
            })
            .state('books.fiction', {
                url: '/fiction',
                templateUrl: 'fiction.html',
                controller: function ($stateParams, BooksService, $scope, $filter) {
                    BooksService.getTopBooks().then(
                        function(result) {
                           $scope.books = result.data;
                           $scope.search = 'Combined Print and E-Book Fiction';
 
                           $scope.filteredBooks = $filter('filter')($scope.books, $scope.search);
                        }
                    );
              
                }
            })
            .state('books.nonfiction', {
                url: '/nonfiction',
                templateUrl: 'nonfiction.html',
                controller: function ($stateParams, BooksService, $scope, $filter) {
                    BooksService.getTopBooks().then(
                        function(result) {
                           $scope.books = result.data;
                           $scope.search = 'Combined Print and E-Book Nonfiction';
 
                           $scope.filteredBooks = $filter('filter')($scope.books, $scope.search);
                        }
                    );
              
                }
            })
            /*.state('home.technology', {
                url: '/technology',
                templateUrl: 'technology.html',
                controller: function ($stateParams, ArticlesService, $scope, $filter) {
                    ArticlesService.getMostViewedArticles().then(
                        function(result) {
                           $scope.articles = result.data;
                           $scope.search = 'technology';
 
                           $scope.filteredArticles = $filter('filter')($scope.articles, $scope.search);
                        }
                    );
              
                }
            })
            .state('united-states', {
                url: '/united-states',
                templateUrl: 'us.html',
                controller: function ($stateParams, ArticlesService, $scope, $filter) {
                    ArticlesService.getMostViewedArticles().then(
                        function(result) {
                           $scope.articles = result.data;
                           $scope.search = 'U.S.';
 
                           $scope.filteredArticles = $filter('filter')($scope.articles, $scope.search);
                        }
                    );
              
                }
            })*/
            .state('my-movies', {
                url: '/my-movies',
                templateUrl: 'myMovies.html',
                controller: 'BookmarkController as myMovies'
            })
            .state('my-books', {
                url: '/my-books',
                templateUrl: 'myBooks.html',
                controller: 'BookmarkController as myBooks'
            })
            .state('books', {
                url: '/books',
                templateUrl: 'books.html',
                controller: 'TopBooksController as books'
            })
            .state('book', {
                url: '/books/:id',
                templateUrl: 'book.html',
                controller: 'BookController as book'
            })
    });

