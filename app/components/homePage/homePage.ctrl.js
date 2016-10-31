(function(){
    'use strict';

    angular.module("myApp").controller('homePage', function ($scope) {
        $scope.title = "Home Page";
        $scope.showText = false;

        /**
         * Smooth scroll
         */
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

        var nav = $('.nav-panel'),
            viewportWidth = window.innerWidth;

        var $hamburger = $(".hamburger");
        $hamburger.on("click", function(e) {
            $hamburger.toggleClass("is-active");
        });

        $(".button").click(function() {
            $(this).toggleClass("active");
            $("#overlay-for-menu").toggleClass("open");
            $(".header-center").toggleClass("hidden");

            if ($("nav").css('display') == 'block') {
                $("nav").css('display', 'none')
            } else {
                $("nav").css('display', 'block');
                $("nav").addClass('fadeInLeft');
            }
        })
    })
})();
