(function () {
    var $container = $('.screen-slider');

    var loading = 2;

    function load_listener() {
        loading--;

        if (loading <= 0) {
            ready();
        }
    }

    var img_win = document.createElement('img');
    var img_linux = document.createElement('img');
    img_win.addEventListener('load', load_listener);
    img_linux.addEventListener('load', load_listener);

    img_win.src = 'lib/img/screen-windows.jpg';
    img_linux.src = 'lib/img/screen-linux.jpg';

    var list = ['Mac', 'Windows', 'Linux'];
    var markers = [
        '<a href="http://www.wunderlist.com/" target="_blank">Wunderlist</a> MacOS desktop app by 6Wunderkinder created width TideSDK.',
        '<a href="http://www.wunderlist.com/" target="_blank">Wunderlist</a> Windows desktop app by 6Wunderkinder created width TideSDK.',
        '<a href="http://www.wunderlist.com/" target="_blank">Wunderlist</a> Linux desktop app by 6Wunderkinder created width TideSDK.',
    ];
    var list_index = 0;

    function get_previous() {
        if (list_index <= 0) return list[list.length - 1];
        return list[list_index - 1];
    }

    function get_next() {
        if (list_index >= list.length - 1) return list[0];
        return list[list_index + 1];
    }

    function render_controller() {
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += '<a href="#" class="progress ' + ((i == list_index) ? 'active' : '') + '" data-index="' + i + '"></a>'
        }
        return html;
    }

    function ready() {
        $container.append(img_win).append(img_linux);
        $(img_win).hide();
        $(img_linux).hide();

        var btn_left = $('<a href="#" class="left">' + get_previous() + '</a>');
        var btn_right = $('<a href="#" class="right">' + get_next() + '</a>');

        var controller = $('<div class="slide-controller">' + render_controller() + '</div>');

        $container.append(btn_left).append(btn_right).append(controller);

        $container.on('click', 'a', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $this = $(this);

            if ($this.hasClass('progress')) {
                list_index = parseInt($this.attr('data-index'));
            }

            if ($this.hasClass('right')) {
                list_index++;
                if (list_index >= list.length) list_index = 0;
            }

            if($this.hasClass('left')){
                list_index--;
                if(list_index < 0) list_index = list.length-1;
            }

            $container.children('img').fadeOut();
            $($container.children('img')[list_index]).fadeIn();

            $('.left', $container).text(get_previous());
            $('.right', $container).text(get_next());

            $('.marker', $container).html(markers[list_index]);

            $('.slide-controller', $container).html(render_controller());
        });
    }
})();