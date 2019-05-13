$(window).on('load', function(){
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });

    $('#shows .shows__images').lightGallery({
        selector: '.shows__image',
        subHtmlSelectorRelative: true,
        thumbnail: false
    });
});


$(function () {
    $('.header__nav li a').click(function (e) {
        e.preventDefault();
        var blockID = $(this).attr('href');

        $("html, body").animate({ scrollTop: $(blockID).offset().top - 50 }, 600);


    })

    $('.scroll-top').click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0}, 600);
    })
});

