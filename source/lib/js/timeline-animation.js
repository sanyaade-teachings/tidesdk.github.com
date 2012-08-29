(function () {
    var $container = $('.example');

    // t: current time, b: begInnIng value, c: change In value, d: duration

    var supertrick;
    jQuery.easing.customEase = function (x, t, b, c, d) {
        var xPos = 200 * x - 100;
        var val = -Math.sqrt(10000 - xPos * xPos) + 56;
        supertrick.style.top = val + 'px';
        return x;
    }

    var steps = [
        {
            prepare:function () {
                $('.window1', $container).css({
                    top:50,
                    left:200,
                    width:'auto',
                    height:'auto',
                    opacity:1
                }).fadeIn();

                $('.window2', $container).css({
                    top:20,
                    left:100,
                    width:'auto',
                    height:'auto',
                    opacity:0.5
                }).fadeIn();

            },
            exec:function (cb) {
                $('.window1, .window2', $container).animate({
                    top:90,
                    left:150,
                    width:32,
                    height:32,
                    opactiy:0
                }, 1000, function () {
                    $('.window1, .window2', $container).hide();
                });

                setTimeout(function () {
                    $('.source', $container).css({
                        top:55,
                        left:100,
                        opacity:0
                    }).show().animate({
                                opacity:1
                            }, 1000, cb);
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
            exec:function (cb) {
                $('.tidesdk-app', $container).fadeIn();
                setTimeout(function () {
                    $('.source', $container).animate({
                        left:250
                    }, function () {
                        $('.source', $container).fadeOut();
                        setTimeout(function () {
                            $('.executable').css({
                                top:56,
                                left:250,
                                width: 'auto',
                                height: 'auto'
                            }).fadeIn().animate({
                                        left:400
                                    }, cb);
                        }, 1000);
                    });
                }, 1000);
            }
        },
        {
            exec:function (cb) {
                setTimeout(function () {
                    supertrick = $('.executable', $container)[0];
                    $('.executable', $container).animate({
                        left:[690, 'customEase']
                    }, function () {
                        $(this).animate({
                            width:0,
                            height:0,
                            left:'+=57',
                            top:'+=66'
                        }, function () {
                            $('.window3', $container).css({
                                top:122,
                                left:747,
                                width:0,
                                height:0
                            }).show().animate({
                                        top:'-=54',
                                        left:'-=82',
                                        width:164,
                                        height:108
                                    }, function () {
                                        $('.tidesdk-app', $container).fadeOut(2000);
                                        setTimeout(function () {
                                            $('.window3', $container).fadeOut(2000);
                                            steps[0].prepare();
                                            setTimeout(function () {
                                                current_step = 0;
                                                controller.html(render_progress());
                                                play(1000);
                                            }, 2000);
                                        }, 5000);
                                    });
                        });
                    });
                }, 1000);
            }
        }
    ];

    var current_step = 0;

    function play(spacing) {
        setTimeout(function () {
            steps[current_step].exec(function () {
                play(spacing);
            });
            controller.html(render_progress());
            current_step++;
        }, spacing);
    }

    function render_progress() {
        var html = '';
        for (var i = 0; i < steps.length; i++) {
            html += '<span class="progress ' + ((i == current_step) ? 'active' : '') + '" data-index="' + i + '"></span>'
        }
        return html
    }

    var controller = $('<div class="slide-controller">' + render_progress() + '</div>');

    $container.append(controller);

    play(1000);

})();