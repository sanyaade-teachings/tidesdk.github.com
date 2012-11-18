(function () {
    var $container = $('.world'),
            markers = [];

    var attract_radius = 15;

    var $faces = $('<div class="faces"></div>');

    $container.after($faces);

    $presenter = $('.map .presenter');

    $.getJSON('lib/data/profiles.json?2', function (response) {
        init(response);
    });

    /**
     * Made available publicly as intention!
     * @type {Object}
     */
    map = {
        /**
         * Pass an object containing a x and y property to place a new marker.
         * @param {Object} params
         */
        add_marker:function (params) {
            var cnt = $container.children('.marker').size();

            var marker = $('<span class="marker" data-index="' + cnt + '" title="' + params.title + '"></span>');
            marker.css({
                left:params.x,
                top:params.y,
                'z-index':params.x
            });
            $container.append(marker);
            return cnt;
        }
    }

    function init(profiles) {
        var i, j, f;
        //Step 1: Create markers and attach profiles to them.
        //Markers "catch" profiles in a radius of 10px around them.
        for (i = 0; i < profiles.length; i++) {
            //Try and find an existing marker for that profile.

            if (!profiles[i].avatar) profiles[i].avatar = 'lib/img/user.png';

            $faces.append('<span class="avatar" data-index="' + i + '" title="' + profiles[i].name + '"><img src="' + profiles[i].avatar + '"></span>');

            profiles[i].index = i;

            f = false;
            for (j = 0; j < markers.length; j++) {
                if (markers[j].x > profiles[i].pos.x - attract_radius && markers[j].x < profiles[i].pos.x + attract_radius &&
                        markers[j].y > profiles[i].pos.y - attract_radius && markers[j].y < profiles[i].pos.y + attract_radius) {
                    //Marker fits here!
                    markers[j].profiles.push(profiles[i]);
                    f = true;
                    break;
                }
            }
            if (f) continue;

            //No existing marker found for that profile. Create a new one.
            markers.push({
                x:profiles[i].pos.x,
                y:profiles[i].pos.y,
                profiles:[profiles[i]]
            });
        }

        for (i = 0; i < markers.length; i++) {
            if (markers[i].profiles.length == 1) {
                markers[i].title = markers[i].profiles[0].name;
            } else {
                markers[i].title = markers[i].profiles.length + ' people';
            }
            map.add_marker(markers[i]);
        }

        $container.on('mouseover', '.marker',function () {
            var dta = markers[parseInt($(this).attr('data-index'))];

            $('.avatar', $faces).removeClass('highlight');

            for (var i = 0; i < dta.profiles.length; i++) {
                var selector = '.avatar[data-index=' + dta.profiles[i].index + ']';
                $(selector, $faces).addClass('highlight');
            }
        }).on('mouseout', '.marker',function () {
                    $('.avatar', $faces).removeClass('highlight');
                }).on('click', '.marker',function (e) {
                    if ($(this).hasClass('active')) {
                        $container.removeClass('filter');
                        $faces.removeClass('filter');
                        $('.marker', $container).removeClass('active');
                        $('.avatar', $faces).show();
                        return;
                    }

                    e.stopPropagation();
                    $container.addClass('filter');
                    $faces.addClass('filter');
                    $('.marker', $container).removeClass('active');
                    $(this).addClass('active');
                    $('.avatar', $faces).hide();

                    var dta = markers[parseInt($(this).attr('data-index'))];
                    for (var i = 0; i < dta.profiles.length; i++) {
                        var selector = '.avatar[data-index=' + dta.profiles[i].index + ']';
                        $(selector, $faces).show();
                    }
                }).on('click', function () {
                    $container.removeClass('filter');
                    $faces.removeClass('filter');
                    $('.marker', $container).removeClass('active');
                    $('.avatar', $faces).show();
                });

        $faces.on('click', '.avatar', function () {
            var dta = profiles[parseInt($(this).attr('data-index'))];
            $presenter.find('.avatar img')[0].src = dta.avatar;
            $presenter.find('h3 span').text(dta.name);
            $presenter.find('h3 small').text(dta.title + ' at ' + dta.business);
            $presenter.find('.role').text(dta['tidesdk-role']);
            var html = dta.description.replace(/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g, function (a) {
                return '<a href="' + a + '" target="_blank">' + a + '</a>'
            });
            $presenter.find('.details').html(html);

            $faces.slideUp(200);
            $presenter.slideDown(200);
        });

        $presenter.on('click', '.close', function () {
            $presenter.slideUp(200);
            $faces.slideDown(200);
        });
    }
})();