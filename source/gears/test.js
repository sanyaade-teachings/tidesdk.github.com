/**
 * test
 * =======
 * description
 */

require.config({
    paths:{
        'api':'http://example.com/api.js'
    },
    urlArgs:"bust=" + (new Date()).getTime() //Remove after development
});

define(function () {

});