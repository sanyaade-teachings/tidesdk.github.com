(function () {
    var $container = $('.example');

    var steps = [
        {
            prepare:function () {
                $('.window1', $container).css({
                    top:50,
                    left:200,
                    width:'auto',
                    height:'auto',
                    opacity:1
                }).show();
            },
            exec:function () {
                $('.window1, .window2', $container).animate({
                    top:90,
                    left:150,
                    width:32,
                    height:32,
                    opactiy:0
                }, 1000, function () {
                    $('.window1, .window2').hide();
                });

                setTimeout(function () {
                    $('.source', $container).css({
                        top:55,
                        left:100,
                        opacity:0
                    }).show().animate({
                                opacity:1
                            }, 1000);
                }, 500);

            },
            finish:function () {
                $('.window1, .window2', $container).css({
                    top:90,
                    left:150,
                    width:32,
                    height:32
                });
                $('.window3, .source, .tidesdk-app, .executable').hide();
            }
        },
        {
            exec:function () {
                $('.tidesdk-app', $container).fadeIn();
                setTimeout(function () {
                    $('.source', $container).animate({
                        left:250
                    }, function () {
                        $('.source', $container).fadeOut();
                        $('.executable').css({
                            top:56,
                            left:250
                        }).fadeIn().animate({
                                    left:400
                                });
                    });
                }, 1000);
            }
        }
    ];

    var current_step = 0;

    function play() {
        steps[current_step].exec();
        current_step++;
    }

    setInterval(function () {
        if (current_step < steps.length) {
            play();
        }
    }, 3000);
    play();

})();