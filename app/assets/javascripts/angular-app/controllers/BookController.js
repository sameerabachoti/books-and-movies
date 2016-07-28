function BookController($scope, $stateParams, BooksService){
    var ctrl = this;
    BooksService.getBook($stateParams.id).then(function(response){   
         ctrl.data = response.data;
         console.log(ctrl.data);
    });
    ctrl.currentUser = currentUser;

    /*ctrl.submitComment = function(){
      var comment = {article_id: $stateParams.id, content: ctrl.commentContent};
      ArticlesService.postComment(comment, $stateParams.id).then(function(response) {
        ctrl.data.value.data.comments.push(comment)
      })
    }

    ctrl.bookmarkArticle = function(){    
       var article = ctrl.data.value.data;   
       ArticlesService.postArticle(article).then(function(response){   
         currentUser.articles.push(article);   
       });   
    }*/
};

BookController.$inject = ['$scope', '$stateParams', 'BooksService'];

angular
    .module('app')
    .controller('BookController', BookController);