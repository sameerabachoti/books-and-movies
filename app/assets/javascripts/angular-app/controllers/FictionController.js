function FictionController($stateParams, BooksService, $scope, $filter){
    var ctrl = this;
    
    BooksService.getTopBooks().then(
      function(result) {
         ctrl.books = result.data;
         ctrl.search = 'Combined Print and E-Book Fiction';

         ctrl.filteredBooks = $filter('filter')(ctrl.books, ctrl.search);
      }
    );
};

BookController.$inject = ['$scope', '$stateParams', 'BooksService'];

angular
    .module('app')
    .controller('FictionController', FictionController);