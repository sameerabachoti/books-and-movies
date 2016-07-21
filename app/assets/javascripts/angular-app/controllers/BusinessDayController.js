function BusinessDayController($filter, articles){
    this.list = articles.getMostViewedArticles().$$state; 
    console.log(this.list);
 
    this.search = 'B';
 
    var filteredList = $filter('filter')(this.list, this.search);

    console.log(filteredList);
};

BusinessDayController.$inject = ['ArticlesService'];


angular
    .module('app')
    .controller('BusinessDayController', BusinessDayController);