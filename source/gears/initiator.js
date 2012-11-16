/**
 * initiator
 * =======
 * description
 */

require.config({
    //urlArgs:"bust=" + (new Date()).getTime(), //Remove after development
    paths:{
        'collector_api':'http://social-rockstar.com/tide_collector/api/api.amd'
    }
});

define(['modules/donation', 'modules/download'], function (donation, download) {
    var $btn = $('<a style="margin-left: 10px;" class="btn" href="#">Donate</a>');

    $btn.click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        donation.show();
    });

    $('.action').append($btn);

    if (location.hash == '#download') {
        download.show();
    }

    if (location.hash == '#donation') {
        donation.show();
    }
});