(function () {

    showMenu();

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


})();


function showMenu() {
    $(".button").click(function() {
        console.log("skeguwueug");
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
}




$(window).on('resize', function() {
    console.log(window.innerWidth);

    if (window.innerWidth <= 1023) {
        //console.log("Test");
    }

});



$(document).ready(function(){



});





