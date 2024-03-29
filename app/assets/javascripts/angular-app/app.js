angular
    .module('app', ['ngAnimate','ui.router', 'templates'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: "home.html",
                controller: 'TopMoviesController as home'
            })
            .state('movies', {
                url: '/movies',
                templateUrl: "movies.html",
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
                controller: 'FictionController as fiction'
            })
            .state('books.nonfiction', {
                url: '/nonfiction',
                templateUrl: 'nonfiction.html',
                controller: 'NonfictionController as nonfiction'
            })
            .state('my-movies', {
                url: '/my-movies',
                templateUrl: 'myMovies.html',
                controller: 'BookmarkController as myMovies'
            })
            .state('new-movie', {
                url: '/new-movie',
                templateUrl: 'new-movie.html',
                controller: 'TopMoviesController as movies'
            })
            .state('edit-movie', {
                url: '/edit-movie/:id',
                templateUrl: 'edit-movie.html',
                controller: 'MovieController as movie'
            })
            .state('delete-movie', {
                url: '/delete-movie/:id',
                templateUrl: 'movie.html',
                controller: 'TopMoviesController as movies'
            })
            .state('my-books', {
                url: '/my-books',
                templateUrl: "myBooks.html",
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
            .state('new-book', {
                url: '/new-book',
                templateUrl: 'new-book.html',
                controller: 'TopBooksController as books'
            })
            .state('edit-book', {
                url: '/edit-book/:id',
                templateUrl: 'edit-book.html',
                controller: 'BookController as book'
            })
            .state('delete-book', {
                url: '/delete-book/:id',
                templateUrl: 'book.html',
                controller: 'TopBooksController as books'
            })

            $urlRouterProvider.otherwise('/');
    });

