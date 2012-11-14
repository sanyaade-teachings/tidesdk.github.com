/**
 * donation
 * ===========
 * Shows a donation window.
 */
define(['modules/modal', 'text!./donation/template.html', 'modules/ui/slider'], function (mod_modal, template, mod_slider) {

    var my_modal = new mod_modal();

    var detail_mode = false;

    var sliders = [];

    my_modal.el.html(template);

    var $wgt = $('.wgt-donation', my_modal.el);
    var $slider_area = $('.sliders', $wgt);
    var $total_amount = $('.total-amount b', $wgt);
    var $form_amount = $('#wgt-donation-amount');
    var $detail_sliders = $('.detail-sliders', $wgt);
    var detail_sliders_initialized = false;

    var main_slider = new mod_slider({
        min:0,
        max:200,
        value:0,
        width:550
    });

    main_slider.on('change', function (value) {
        $total_amount.text(value);
        $form_amount.val(value + '.00');
    });

    main_slider.appendTo($slider_area);

    $('form', $wgt).bind('submit', function(e){
       if(detail_mode){
           e.preventDefault();
           e.stopPropagation();

           require(['collector_api'], function(api){
               var dta = {};
                for(var i = 0; i < sliders.length; i++){
                    dta[sliders[i].hash] = sliders[i].value;
                }
               api.request({
                   method: 'POST',
                   url: 'http://social-rockstar.com/tide_collector/donation',
                   data: dta,
                   callback: function(){
                       detail_mode = false;
                       $('form', $wgt)[0].submit();
                   }
               });
           });
       }
    });

    $('.btn-slim', $wgt).click(function (e) {
        $(this).slideUp();
        e.stopPropagation();
        e.preventDefault();
        if (!detail_sliders_initialized) {
            require(['collector_api', 'modules/ui/donation_slider'], function (api, mod_donation_slider) {

                api.request({
                    url:'http://social-rockstar.com/tide_collector/donation',
                    method:'get',
                    callback:function (response) {
                        detail_mode = true;
                        json = response;

                        var slider;


                        function update_total() {
                            var total = 0;
                            for (var i = 0; i < sliders.length; i++) {
                                total += sliders[i].value;
                            }
                            $total_amount.text(total);
                            $form_amount.val(total + '.00');
                        }

                        for (var i = 0; i < json.length; i++) {
                            slider = new mod_donation_slider({
                                label:json[i].label,
                                min:json[i].min,
                                max:json[i].max,
                                value:json[i].value
                            });
                            slider.appendTo($detail_sliders);
                            slider.on('change', function () {
                                update_total();
                            });
                            slider.hash = json[i].hash;
                            sliders.push(slider);
                        }
                        $slider_area.slideUp(function () {
                            update_total();
                            $detail_sliders.slideDown(function () {
                                my_modal.center();
                            });
                        });
                        detail_sliders_initialized = true;
                    }
                });
            });
        } else {
            $slider_area.slideUp();
            $detail_sliders.slideDown();
        }
    });

    var first_open = true;
    var obj = {
        show:function () {
            my_modal.open();

            if(first_open){
                first_open = false;
                setTimeout(function () {
                    main_slider.set(12);
                }, 1000);
            }
        }
    }

    return obj;
});