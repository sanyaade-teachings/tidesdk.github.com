/**
 * modal.js
 * ===========
 * Creates modal popups
 */
define([], function () {
    $('body').append('<div class="mod-modal-backdrop"></div>');

    $('.mod-modal-backdrop').click(function () {
        $('.mod-modal-window, .mod-modal-backdrop').fadeOut();
    });

    return function (params) {
        var modal_id = Math.random().toString().split('.').pop();
        var DOM_el = $('<div class="mod-modal-window mod-modal-' + modal_id + '"></div>');

        var obj = {
            el:DOM_el,
            open:function () {
                this.center();
                $('.mod-modal-backdrop, .mod-modal-' + modal_id).fadeIn();
            },
            close:function () {
                $('.mod-modal-backdrop, .mod-modal-' + modal_id).fadeOut();
            },
            /**
             * Recalculates the vertical position of the modal.
             * Call this when your modal height has changed.
             */
            center:function () {
                var height = DOM_el.height();
                DOM_el.animate({
                    'margin-top': '-' + Math.round(height / 2) + 'px'
                });
            }
        };

        $('body').append(DOM_el);

        return obj;
    }
});