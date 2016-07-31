function NonfictionController($stateParams, BooksService, $scope, $filter){
    var ctrl = this;
    
    BooksService.getTopBooks().then(
      function(result) {
         ctrl.books = result.data;
         ctrl.search = 'Combined Print and E-Book Nonfiction';

         ctrl.filteredBooks = $filter('filter')(ctrl.books, ctrl.search);
      }
    );
};

BookController.$inject = ['$scope', '$stateParams', 'BooksService'];

angular
    .module('app')
    .controller('NonfictionController', NonfictionController);