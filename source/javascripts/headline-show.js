(function () {
    var $container = $('.sliding-doors');

    var elm1 = $('.slide1', $container);
    var elm2 = $('.slide2', $container);

    var elm1_strings = [
        'Mac',
        'Windows',
        'Linux'
    ];

    var elm2_strings = [
        'HTML5 & CSS3',
        'JavaScript',
        'PHP',
        'Ruby',
        'Python'
    ]

    setInterval(function () {
        elm1.slideUp('slow', function () {
            elm1.text('<' + elm1_strings[Math.floor(Math.random() * elm1_strings.length)] + '>');
            elm1.slideDown('slow');
        });
        elm2.slideUp('slow', function () {
            elm2.text('<' + elm2_strings[Math.floor(Math.random() * elm2_strings.length)] + '>');
            elm2.slideDown('slow');
        });
    }, 5000);
})();