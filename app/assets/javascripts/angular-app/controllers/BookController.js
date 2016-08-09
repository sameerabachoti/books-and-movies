function BookController($scope, $stateParams, BooksService){
    var ctrl = this;
    
    BooksService.getBook($stateParams.id)
                .then(function(res){
                   ctrl.data = res.data;
                });
    
    ctrl.submitReview = function(){
      var review = {book_id: $stateParams.id, content: ctrl.reviewContent, rating: ctrl.reviewRating, user_id: currentUser.id};
      BooksService.postBookReview(review, $stateParams.id).then(function(response) {
        ctrl.data.value.data.book_reviews.push(review)
      })
    }

    ctrl.bookmarkBook = function(){    
       var book = ctrl.data.value.data;   
       BooksService.postBook(book).then(function(response){   
         currentUser.books.push(book);   
       }); 
       alert("You have bookmarked this book.")  
    }

    ctrl.editBook = function(){
      var book = {title: ctrl.data.value.data.title, author: ctrl.data.value.data.author, description: ctrl.data.value.data.description};
      BooksService.editBook($stateParams.id, book).then(function(response) {
        ctrl.books.value.data.push(book);
        ctrl.edit_message = "This book has been edited."
      })
    }

    ctrl.deleteBook = function(){
     if (confirm("Are you sure you want to delete this movie?")){
        book = ctrl.data.value.data;
        BooksService.deleteBook(book).then(function(response) {
          ctrl.books.value.data.splice(ctrl.books.value.data.indexOf(book), 1);
        })
        ctrl.delete_message = "This book has been deleted."
      }
      else{
        location.reload();
      }
    }
};

BookController.$inject = ['$scope', '$stateParams', 'BooksService'];

angular
    .module('app')
    .controller('BookController', BookController);