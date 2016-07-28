function TopBooksController(books){
  var ctrl = this;
  ctrl.data = books.getTopBooks().$$state;
};

TopBooksController.$inject = ['BooksService'];

angular
    .module('app')
    .controller('TopBooksController', TopBooksController);