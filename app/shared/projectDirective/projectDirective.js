(function(){
    'use strict';

    myApp.directive('projectDirective', function () {
       return {
           restrict : 'E',
           templateUrl : 'app/shared/projectDirective/projectDirective.html',
           scope : {
               projectClass : '@',
               projectText : '@'
           }
       };
    })
})();