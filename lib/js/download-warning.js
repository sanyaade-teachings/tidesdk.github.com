(function(){
    $('.backdrop').click(function(){
        $('.backdrop, .modal').fadeOut();
    });

    $('.download').first().click(function(e){
        e.preventDefault();
        e.stopPropagation();

        $('.backdrop, .modal').fadeIn();
    });
})();