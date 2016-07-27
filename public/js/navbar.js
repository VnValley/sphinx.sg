;(function (window) {
    'use strict';


    window.navbar = function () {
        var $navBar = $('#navBar');
        var anchor = $navBar.offset().top;
        var $scrollTopButton = $('#backToTopButton');

        $scrollTopButton.on('click', function () {
            if ($(this).hasClass('active')) {
                $('html,body').animate({
                    scrollTop: 0
                }, 300);
            }
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() >= anchor) {
                $navBar.addClass('navbar-fixed-top');
                $navBar.removeClass('navbar-static-top');
                $scrollTopButton.addClass('active');
                $('body').addClass('pd-50')
            } else {
                $navBar.addClass('navbar-static-top');
                $navBar.removeClass('navbar-fixed-top');
                $scrollTopButton.removeClass('active');
                $('body').removeClass('pd-50')
            }
        })
    };
})(window);