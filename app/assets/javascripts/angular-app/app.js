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

