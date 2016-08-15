
function reviewForm(){
  return {
        template: [
          '<div class="review_form">',
            "<form name='form' ng-submit='ctrl.submitReview()'>",
              'Movie Rating:',
              '<select name="reviewRating" required="required" ng-model="ctrl.reviewRating">',
                '<option value=1>1</option>',
                '<option value=2>2</option>',
                '<option value=3>3</option>',
                '<option value=4>4</option>',
                '<option value=5>5</option>',
              '</select>',
              '<div ng-if="form.reviewRating.$touched && form.reviewRating.$error.required">',
                    'Please select a rating.',
              '</div>',
              '<br><br>',
              'Review:<br>',
              '<textarea name="reviewContent" required="required" ng-model="ctrl.reviewContent"></textarea><br>',
              '<div ng-if="form.reviewContent.$touched && form.reviewContent.$error.required">',
                    'Review must be filled out!', 
              '</div>',
              '<input type="submit">',
            '</form>',
          '</div>'
        ].join(''),
        controller : "@",
        name: "controllerName",
        controllerAs: 'ctrl', 
        bindToController: true,
        restrict: 'E'
    };
}

angular
       .module("app")
       .directive("reviewForm", reviewForm);