(function(){
    'use strict';

    angular.module("myPortfolio").config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'app/components/homePage/homePage.html',
                controller : 'homePage'
            })
            .when('/contact', {
                templateUrl : 'app/components/contactPage/contactPage.html',
                controller : 'contactPage'
            })
            .when('/project', {
                templateUrl : 'app/components/projectPage/projectPage.html',
                controller : 'projectPage'
            })
    });
})();