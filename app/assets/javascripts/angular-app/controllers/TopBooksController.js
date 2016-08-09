function TopBooksController($stateParams, BooksService){
  var ctrl = this;

  BooksService.getTopBooks()
                .then(function(res){
                   ctrl.data = res.data;
                });

  ctrl.addBook = function(){
      var book = {title: ctrl.title, author: ctrl.author, description: ctrl.description};

      BooksService.postNewBook(book).then(function(response) {
        ctrl.data.value.data.push(book);
      })
      ctrl.new_message = "This book has been added."
  }
};

TopBooksController.$inject = ['$stateParams', 'BooksService'];

angular
    .module('app')
    .controller('TopBooksController', TopBooksController);