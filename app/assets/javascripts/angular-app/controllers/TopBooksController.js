function TopBooksController($stateParams, BooksService){
  var ctrl = this;
  ctrl.data = BooksService.getTopBooks().$$state;

  ctrl.addBook = function(){
      var book = {title: ctrl.title, author: ctrl.author, description: ctrl.description};

      BooksService.postNewBook(book).then(function(response) {
        ctrl.data.value.data.push(book);
      })
  }
};

TopBooksController.$inject = ['$stateParams', 'BooksService'];

angular
    .module('app')
    .controller('TopBooksController', TopBooksController);