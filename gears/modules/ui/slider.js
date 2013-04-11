/**
 * slider.js
 * ===========
 * Creates a draggable slider control which ranges between a min and max value.
 */
define(['text!./slider/template.html'], function (template) {
    return function (params) {
        var settings = {
            min:params.min || 0,
            max:params.max || 100,
            value:params.value || 0,
            width:params.width || '100%'
        }

        if (settings.value < settings.min) settings.value = settings.min;
        if (settings.value > settings.max) settings.value = settings.max;

        var initpercentage = Math.round((settings.value - settings.min) / ((settings.max - settings.min) / 100));

        var DOM_el = $(template);

        var $handle = $('.slider-handle', DOM_el),
                containerpos,
                rightend,
                draginfo;

        DOM_el.css('width', settings.width);

        $handle.bind('mousedown', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $handle.addClass('clicked');
            containerpos = DOM_el.offset().left;
            draginfo = e.clientX - $handle.offset().left;
        });

        $(document).bind('mouseup', function () {
            draginfo = null;
            $handle.removeClass('clicked');
        });

        DOM_el.bind('mousemove', function (e) {
            if (draginfo == null) return;
            e.stopPropagation();
            e.preventDefault();
            var left = e.clientX - containerpos - draginfo;
            if (left < 0) left = 0;
            if (left > rightend) left = rightend;

            var percentage = left / (rightend / 100);

            obj.value = Math.round(percentage * (settings.max / 100)) + settings.min;

            obj.trigger('change', obj.value);

            $handle.css('left', left);
        });

        function initialize() {
            draginfo = null;
            setTimeout(function () {
                containerpos = DOM_el.offset().left;
                rightend = DOM_el.width() - $handle.width();
                $handle.css('left', (rightend / 100) * initpercentage);
                if (settings.value != settings.min) {
                    obj.trigger('change', obj.value);
                }
            }, 500);
        }

        var obj = {
            value:settings.value,
            appendTo:function (element) {
                $(element).append(DOM_el);
                initialize();
            },
            prependTo:function (element) {
                $(element).prepend(DOM_el);
                initialize();
            },
            set:function (value, animated) {
                if (value > settings.max) value = settings.max;
                if (value < settings.min) value = settings.min;
                var initpercentage = Math.round((value - settings.min) / ((settings.max - settings.min) / 100));
                if (animated !== false) {
                    $handle.animate({'left':(rightend / 100) * initpercentage}, 1500);
                    var oldValue = obj.value;
                    var step = (value - oldValue) / 10;
                    var cnt = 0;
                    var interval = setInterval(function () {
                        oldValue += step;
                        obj.value = Math.floor(oldValue);
                        obj.trigger('change', obj.value);
                        cnt++;
                        if (cnt >= 10) {
                            clearInterval(interval);
                            obj.value = value;
                            obj.trigger('change', obj.value);
                        }
                    }, 100);
                } else {
                    $handle.css('left', (rightend / 100) * initpercentage);
                    obj.value = value;
                    obj.trigger('change', value);
                }
            }
        }

        _.extend(obj, Backbone.Events);

        return obj;
    }
});