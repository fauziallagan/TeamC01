// function parallax

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.share-button').css({
        'transform': 'translate( 0px, ' + wScroll / 1.3 + '% )'
    });

    $('.top-wrapper .container').css({
        'transform': 'translate( 0px, ' + wScroll / 1.95 + '% )'
    });

    $('.top-wrapper .container .btn-wrapper').css({
        'transform': 'translate( 0px, ' + wScroll / 1.2 + '% )'
    });
});

