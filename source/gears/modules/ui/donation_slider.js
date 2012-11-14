/**
 * donation_slider.js
 * ===========
 * Creates a slider that's enhanced with a dollar value label to the right and a custom label on top.
 */
define(['modules/ui/slider'], function (mod_slider) {
    return function (params) {
        var settings = {
            label: params.label || '',
            min:params.min || 0,
            max:params.max || 100,
            value:params.value || 0,
            width:params.width || '100%'
        }

        var my_slider = new mod_slider(settings);

        var $DOM_el = $('<div class="mod-donation-slider"><span class="label">'+settings.label+'</span><span class="value"><span>$</span><b>0</b></span></div>');

        var $value = $('.value b', $DOM_el);

        my_slider.on('change', function(value){
            $value.text(value);
            obj.value = value;
            obj.trigger('change', value);
        });

        var obj = {
            value: 0,
            appendTo: function(element){
                $(element).append($DOM_el);
                my_slider.prependTo($DOM_el);
            }
        }

        _.extend(obj, Backbone.Events);

        return obj;
    }
});