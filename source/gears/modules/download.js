/**
 * download
 * ===========
 * description
 */
define(['modules/modal', 'modules/donation', 'text!./download/template.html'], function(mod_modal, donation, template){
    var $btn = $('.download');

    var my_modal = new mod_modal({
        width: 420
    });

    my_modal.el.html(template);

    $('.download-columns a').click(function(){
        my_modal.close();
        donation.show();
    });

    $btn.click(function(e){
        e.preventDefault();
        e.stopPropagation();
        my_modal.open();
    });

    var obj = {
        show: function(){
            my_modal.open();
        }
    }

    return obj;
});