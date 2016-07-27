;(function (window, mojs) {
    'use strict';

    var playClip = function ($screen, $template) {
        $screen.html($template.html());
        var audio = $screen.find('audio')[0];
        var $volControl = $('#volumeControl');

        audio.play();

        $volControl.on('click', function () {
            $volControl.toggleClass('fa-volume-up fa-volume-off');
            if ($volControl.hasClass('fa-volume-up')) {
                audio.volume = 1;
            } else {
                audio.volume = 0;
            }
        })
    };

    var extremeInOutEasing = mojs.easing.path('M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0');

    window.welcomeSection = function () {

        var $preContent = $('#preContent');
        var $screen = $('#screen');
        var $clip   = $('#clip');

        var $preContentPopoutAnimation = new mojs.Tween({
            repeat: 0,
            duration: 1000,
            delay: 250,
            onUpdate: function (progress) {
                $preContent.css({
                    transform: 'scale(' + (1 - .99 * extremeInOutEasing(progress)) + ')'
                });
            },
            onComplete: function () {
                $preContent.remove();
                playClip($screen, $clip);
            }
        });

        var $exploreButton = $('#explore');

        $exploreButton.on('click', function () {
            $preContentPopoutAnimation.play();
        })
    };

})(window, mojs);