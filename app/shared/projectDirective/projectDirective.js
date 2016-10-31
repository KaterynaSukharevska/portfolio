(function(){
    'use strict';

    angular.module("myApp").directive('projectDirective', function () {
       return {
           restrict : 'E',
           templateUrl : 'app/shared/projectDirective/projectDirective.html',
           scope : {
               title : '@'
           }
       };
    })
})();